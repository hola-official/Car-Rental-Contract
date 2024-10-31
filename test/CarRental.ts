const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("CarRental", function () {
    const depositAmount = ethers.parseEther("1");
    const rentalFeePerDay = ethers.parseEther("0.1");
    const rentalDays = 7;
    const SECONDS_PER_DAY = 86400;

    async function deployContract() {
        const [owner, renter, addr2] = await ethers.getSigners();
        const CarRental = await ethers.getContractFactory("CarRental");
        const carRental = await CarRental.deploy();
        return { carRental, owner, renter, addr2 };
    }

    describe("Car Management", function () {
        it("Should add a new car successfully", async function () {
            const { carRental, owner } = await deployContract();

            await carRental.addCar(depositAmount, rentalFeePerDay);
            expect(await carRental.getCarRentalCount(owner.address)).to.equal(1);

            const carDetails = await carRental.getCarRentalDetails(owner.address, 0);
            expect(carDetails._depositAmount).to.equal(depositAmount);
            expect(carDetails._rentalFeePerDay).to.equal(rentalFeePerDay);
            expect(carDetails._isReturned).to.be.true;
            expect(carDetails._isDisputed).to.be.false;
        });

        it("Should get correct car rental count", async function () {
            const { carRental, owner } = await deployContract();

            expect(await carRental.getCarRentalCount(owner.address)).to.equal(0);
            await carRental.addCar(depositAmount, rentalFeePerDay);
            expect(await carRental.getCarRentalCount(owner.address)).to.equal(1);
        });
    });

    describe("Rental Process", function () {
        it("Should rent a car successfully", async function () {
            const { carRental, owner, renter } = await deployContract();
            await carRental.addCar(depositAmount, rentalFeePerDay);

            await carRental.connect(renter).rentCar(
                owner.address,
                0,
                depositAmount,
                rentalFeePerDay,
                rentalDays,
                { value: depositAmount }
            );

            const rentalDetails = await carRental.getCarRentalDetails(owner.address, 0);
            expect(rentalDetails._renter).to.equal(renter.address);
            expect(rentalDetails._depositAmount).to.equal(depositAmount);
            expect(rentalDetails._rentalFeePerDay).to.equal(rentalFeePerDay);
            expect(rentalDetails._isReturned).to.be.false;
        });

        it("Should fail to rent with insufficient deposit", async function () {
            const { carRental, owner, renter } = await deployContract();
            await carRental.addCar(depositAmount, rentalFeePerDay);

            await expect(
                carRental.connect(renter).rentCar(
                    owner.address,
                    0,
                    depositAmount,
                    rentalFeePerDay,
                    rentalDays,
                    { value: ethers.parseEther("0.5") }
                )
            ).to.be.revertedWith("Insufficient deposit amount");
        });

        it("Should return car and transfer funds correctly", async function () {
            const { carRental, owner, renter } = await deployContract();
            await carRental.addCar(depositAmount, rentalFeePerDay);

            await carRental.connect(renter).rentCar(
                owner.address,
                0,
                depositAmount,
                rentalFeePerDay,
                rentalDays,
                { value: depositAmount }
            );

            // Advance time by 3 days
            await time.increase(3 * SECONDS_PER_DAY);

            const initialOwnerBalance = await ethers.provider.getBalance(owner.address);
            const initialRenterBalance = await ethers.provider.getBalance(renter.address);

            await carRental.connect(renter).returnCar(owner.address, 0);

            const rentalDetails = await carRental.getCarRentalDetails(owner.address, 0);
            expect(rentalDetails._isReturned).to.be.true;
        });
    });

    describe("Dispute Handling", function () {
        it("Should handle disputes correctly", async function () {
            const { carRental, owner, renter } = await deployContract();
            await carRental.addCar(depositAmount, rentalFeePerDay);

            await carRental.connect(renter).rentCar(
                owner.address,
                0,
                depositAmount,
                rentalFeePerDay,
                rentalDays,
                { value: depositAmount }
            );

            await carRental.connect(renter).disputeRental(owner.address, 0);
            const rentalDetails = await carRental.getCarRentalDetails(owner.address, 0);
            expect(rentalDetails._isDisputed).to.be.true;
        });

        it("Should resolve dispute in favor of owner", async function () {
            const { carRental, owner, renter } = await deployContract();
            await carRental.addCar(depositAmount, rentalFeePerDay);

            await carRental.connect(renter).rentCar(
                owner.address,
                0,
                depositAmount,
                rentalFeePerDay,
                rentalDays,
                { value: depositAmount }
            );

            await carRental.connect(renter).disputeRental(owner.address, 0);
            const initialOwnerBalance = await ethers.provider.getBalance(owner.address);

            await carRental.connect(owner).resolveDispute(owner.address, 0, true);
            
            const rentalDetails = await carRental.getCarRentalDetails(owner.address, 0);
            expect(rentalDetails._isDisputed).to.be.false;
        });
    });

    describe("Deposit Claims", function () {
        it("Should allow deposit claim after rental period", async function () {
            const { carRental, owner, renter } = await deployContract();
            await carRental.addCar(depositAmount, rentalFeePerDay);

            await carRental.connect(renter).rentCar(
                owner.address,
                0,
                depositAmount,
                rentalFeePerDay,
                rentalDays,
                { value: depositAmount }
            );

            // Advance time beyond rental period
            await time.increase((rentalDays + 1) * SECONDS_PER_DAY);

            await carRental.connect(owner).claimDeposit(owner.address, 0);
            const rentalDetails = await carRental.getCarRentalDetails(owner.address, 0);
            expect(rentalDetails._depositAmount).to.equal(depositAmount);
        });

        it("Should not allow deposit claim during rental period", async function () {
            const { carRental, owner, renter } = await deployContract();
            await carRental.addCar(depositAmount, rentalFeePerDay);

            await carRental.connect(renter).rentCar(
                owner.address,
                0,
                depositAmount,
                rentalFeePerDay,
                rentalDays,
                { value: depositAmount }
            );

            await expect(
                carRental.connect(owner).claimDeposit(owner.address, 0)
            ).to.be.revertedWith("Rental period not over yet");
        });
    });
});