// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarRental {
    struct carRental {
        address payable owner;
        address payable renter;
        uint256 depositAmount;
        uint256 rentalFeePerDay;
        uint256 startTime;
        uint256 endTime;
        bool isReturned;
        bool isDisputed;
    }

    mapping(address => carRental[]) public carRentals;

    function rentCar(
        uint256 _carIndex,
        uint256 _depositAmount,
        uint256 _rentalFeePerDay,
        uint256 _rentalDays
    ) public payable {
        require(msg.sender != address(0), "Zero not allowed");
        require(_carIndex < carRentals[msg.sender].length, "Invalid car index");
        require(_depositAmount > 0, "Deposit amount must be greater than 0");
        require(
            _rentalFeePerDay > 0,
            "Rental fee per day must be greater than 0"
        );
        require(_rentalDays > 0, "Rental duration must be greater than 0");
        require(msg.value >= _depositAmount, "Insufficient deposit amount");

        carRental storage rental = carRentals[msg.sender][_carIndex];
        require(rental.renter == address(0), "Car is already rented");

        rental.renter = payable(msg.sender);
        rental.depositAmount = _depositAmount;
        rental.rentalFeePerDay = _rentalFeePerDay;
        rental.startTime = block.timestamp;
        rental.endTime = block.timestamp + (_rentalDays * 1 days);
        rental.isReturned = false;
        rental.isDisputed = false;
    }

    function returnCar(uint256 _carIndex) public {
        require(msg.sender != address(0), "Zero not allowed");
        carRental storage rental = carRentals[msg.sender][_carIndex];
        require(
            rental.renter == msg.sender,
            "Only the renter can return the car"
        );
        require(!rental.isReturned, "Car has already been returned");

        uint256 totalRentalFee = ((block.timestamp - rental.startTime) /
            1 days) * rental.rentalFeePerDay;
        rental.owner.transfer(totalRentalFee);
        rental.renter.transfer(rental.depositAmount - totalRentalFee);
        rental.isReturned = true;
    }

    function disputeRental(uint256 _carIndex) public {
        require(msg.sender != address(0), "Zero not allowed");
        carRental storage rental = carRentals[msg.sender][_carIndex];
        require(!rental.isReturned, "Car has already been returned");
        require(
            msg.sender == rental.renter || msg.sender == rental.owner,
            "Only the renter or owner can dispute a rental"
        );

        rental.isDisputed = true;
    }

    function resolveDispute(uint256 _carIndex, bool _isInFavorOfOwner) public {
        require(msg.sender != address(0), "Zero not allowed");
        carRental storage rental = carRentals[msg.sender][_carIndex];
        require(rental.isDisputed, "There is no dispute to resolve");
        require(
            msg.sender == rental.owner || msg.sender == rental.renter,
            "Only the renter or owner can resolve the dispute"
        );

        if (_isInFavorOfOwner) {
            rental.owner.transfer(rental.depositAmount);
        } else {
            rental.renter.transfer(rental.depositAmount);
        }

        rental.isDisputed = false;
    }

    function addCar(uint256 _depositAmount, uint256 _rentalFeePerDay) public {
        require(msg.sender != address(0), "Zero not allowed");
        carRental memory newRental;
        newRental.owner = payable(msg.sender);
        newRental.renter = payable(address(0));
        newRental.depositAmount = _depositAmount;
        newRental.rentalFeePerDay = _rentalFeePerDay;
        newRental.startTime = 0;
        newRental.endTime = 0;
        newRental.isReturned = true;
        newRental.isDisputed = false;

        carRentals[msg.sender].push(newRental);
    }

    function getCarRentalDetails(
        address _owner,
        uint256 _carIndex
    )
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
        require(msg.sender != address(0), "Zero not allowed");
        carRental storage rental = carRentals[_owner][_carIndex];
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

    function claimDeposit(uint256 _carIndex) public {
        require(msg.sender != address(0), "Zero not allowed");
        carRental storage rental = carRentals[msg.sender][_carIndex];
        require(
            rental.endTime <= block.timestamp,
            "Rental period is not over yet"
        );
        require(!rental.isDisputed, "There is a dispute on this rental");

        rental.owner.transfer(rental.depositAmount);
    }
}
