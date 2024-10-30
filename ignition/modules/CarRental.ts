import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CarRentalModule = buildModule("CarRentalModule", (m) => {
  const CarRental = m.contract("CarRental");

  return { CarRental };
});

export default CarRentalModule;
