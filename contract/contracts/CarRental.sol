pragma solidity ^0.8.27;

contract CarRental {
    struct CarRentalStruct {
        address payable owner;
        address payable renter;
        uint256 depositAmount;
        uint256 rentalFeePerDay;
        uint256 startTime;
        uint256 endTime;
        bool isReturned;
        bool isDisputed;
    }

    mapping(address => CarRentalStruct[]) public carRentals;

    function rentCar(
        address _owner,
        uint256 _carIndex,
        uint256 _depositAmount,
        uint256 _rentalFeePerDay,
        uint256 _rentalDays
    ) public payable {
        require(msg.sender != address(0), "Zero address not allowed");
        require(_carIndex < carRentals[_owner].length, "Invalid car index");
        require(_depositAmount > 0, "Deposit amount must be greater than 0");
        require(_rentalFeePerDay > 0, "Rental fee per day must be greater than 0");
        require(_rentalDays > 0, "Rental duration must be greater than 0");
        require(msg.value >= _depositAmount, "Insufficient deposit amount");

        CarRentalStruct storage rental = carRentals[_owner][_carIndex];
        require(rental.renter == address(0), "Car is already rented");

        rental.renter = payable(msg.sender);
        rental.depositAmount = _depositAmount;
        rental.rentalFeePerDay = _rentalFeePerDay;
        rental.startTime = block.timestamp;
        rental.endTime = block.timestamp + (_rentalDays * 1 days);
        rental.isReturned = false;
        rental.isDisputed = false;
    }

    function returnCar(address _owner, uint256 _carIndex) public {
        CarRentalStruct storage rental = carRentals[_owner][_carIndex];
        require(rental.renter == msg.sender, "Only the renter can return the car");
        require(!rental.isReturned, "Car has already been returned");

        uint256 totalRentalFee = ((block.timestamp - rental.startTime) / 1 days) * rental.rentalFeePerDay;
        rental.owner.transfer(totalRentalFee);
        rental.renter.transfer(rental.depositAmount - totalRentalFee);
        rental.isReturned = true;
    }

    function disputeRental(address _owner, uint256 _carIndex) public {
        CarRentalStruct storage rental = carRentals[_owner][_carIndex];
        require(!rental.isReturned, "Car has already been returned");
        require(msg.sender == rental.renter || msg.sender == rental.owner, "Only the renter or owner can dispute a rental");

        rental.isDisputed = true;
    }

    function resolveDispute(address _owner, uint256 _carIndex, bool _isInFavorOfOwner) public {
        CarRentalStruct storage rental = carRentals[_owner][_carIndex];
        require(rental.isDisputed, "No dispute to resolve");
        require(msg.sender == rental.owner || msg.sender == rental.renter, "Only the renter or owner can resolve the dispute");

        if (_isInFavorOfOwner) {
            rental.owner.transfer(rental.depositAmount);
        } else {
            rental.renter.transfer(rental.depositAmount);
        }

        rental.isDisputed = false;
    }

    function addCar(uint256 _depositAmount, uint256 _rentalFeePerDay) public {
        CarRentalStruct memory newRental;
        newRental.owner = payable(msg.sender);
        newRental.renter = payable(address(0));
        newRental.depositAmount = _depositAmount;
        newRental.rentalFeePerDay = _rentalFeePerDay;
        newRental.isReturned = true;
        newRental.isDisputed = false;

        carRentals[msg.sender].push(newRental);
    }

    function getCarRentalDetails(address _owner, uint256 _carIndex)
        public
        view
        returns (
            address _renter,
            uint256 _depositAmount,
            uint256 _rentalFeePerDay,
            uint256 _startTime,
            uint256 _endTime,
            bool _isReturned,
            bool _isDisputed
        )
    {
        CarRentalStruct storage rental = carRentals[_owner][_carIndex];
        return (
            rental.renter,
            rental.depositAmount,
            rental.rentalFeePerDay,
            rental.startTime,
            rental.endTime,
            rental.isReturned,
            rental.isDisputed
        );
    }

    function getCarRentalCount(address _owner) public view returns (uint256) {
        return carRentals[_owner].length;
    }

    function claimDeposit(address _owner, uint256 _carIndex) public {
        CarRentalStruct storage rental = carRentals[_owner][_carIndex];
        require(rental.endTime <= block.timestamp, "Rental period not over yet");
        require(!rental.isDisputed, "Dispute on this rental");

        rental.owner.transfer(rental.depositAmount);
    }
}
