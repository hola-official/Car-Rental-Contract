# Peer-to-Peer Car Rental Contract

This Solidity smart contract implements a decentralized Peer-to-Peer Car Rental system, where car owners can rent out their vehicles to renters.

## Deployed Contract

- Network: Base Sepolia Testnet
- Contract Address: `0x430c0C180d1E5b8D8E91A605Bd5D7846FB0f1e22` ([View on BaseScan](https://sepolia.basescan.org/address/0x430c0C180d1E5b8D8E91A605Bd5D7846FB0f1e22))

## Features
- Car Rental: Car owners can add their cars to the platform, specifying a deposit amount and daily rental fee. Renters can then rent these cars, providing the deposit and rental period details.
- Deposit Management: The contract holds the rental deposit and automatically deducts the daily rental fee from it. The remaining deposit is released to the car owner at the end of the rental period if no issues are reported.
- Dispute Resolution: Both renters and owners can dispute a rental. The deposit is held until the dispute is resolved, at which point it is transferred to either the owner or renter based on the resolution.
- Rental Details: The contract provides getter functions to retrieve details about a specific rental, as well as the total number of cars listed by a car owner.-
