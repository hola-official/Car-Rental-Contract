import {
  Shield,
  Zap,
  Globe,
  Key,
  CheckCircle,
  Users,
  Scale,
  Car,
} from "lucide-react";


export const vehicles = [
  {
    name: "Tesla Model 3",
    type: "Electric",
    price: "0.1",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "BMW i3",
    type: "Electric",
    price: "0.08",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/2018_BMW_i3_facelift_%281%29.jpg",
  },
  {
    name: "Audi e-tron",
    type: "Electric SUV",
    price: "0.15",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    name: "Porsche Taycan",
    type: "Electric Sports",
    price: "0.2",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Rivian R1T",
    type: "Electric Truck",
    price: "0.18",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/2022_Rivian_R1T_%28in_Glacier_White%29%2C_front_6.21.22.jpg",
  },
  {
    name: "Volkswagen ID.4",
    type: "Electric SUV",
    price: "0.12",
    image:
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
];

export const features = [
  {
    icon: Shield,
    title: "Smart Contract Security",
    description:
      "Enjoy peace of mind with our audited smart contracts handling transactions.",
  },
  {
    icon: Zap,
    title: "Instant Transactions",
    description:
      "Experience lightning-fast bookings and payments on the blockchain.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description:
      "Rent or lend cars anywhere in the world without currency restrictions.",
  },
  {
    icon: Key,
    title: "Self-Sovereign Identity",
    description:
      "Maintain control of your personal data with blockchain-based identity solutions.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Reputation System",
    description:
      "Build trust with an immutable, decentralized review and rating system.",
  },
  {
    icon: Users,
    title: "DAO Governance",
    description:
      "Participate in platform decisions through our Decentralized Autonomous Organization.",
  },
  {
    icon: Scale,
    title: "Fair Dispute Resolution",
    description:
      "Resolve conflicts fairly through our DAO-powered arbitration system.",
  },
  {
    icon: Car,
    title: "Diverse Vehicle Selection",
    description:
      "Choose from a wide range of vehicles, all secured by smart contracts.",
  },
];

export const steps = [
  {
    title: "Connect Your Wallet",
    description:
      "Link your cryptocurrency wallet to access our decentralized platform securely.",
  },
  {
    title: "Choose Your Ride",
    description:
      "Browse our selection of vehicles and book instantly with smart contracts.",
  },
  {
    title: "Drive & Pay Automatically",
    description:
      "Enjoy your rental while blockchain handles payments and security deposits.",
  },
];

export const reasons = [
  "Fully decentralized platform ensuring data privacy",
  "Lower fees compared to traditional car rental services",
  "Smart contracts for secure and transparent transactions",
  "Wide variety of premium and electric vehicles",
  "No middlemen, direct peer-to-peer rentals",
  "Immutable rental history and reputation system",
  "DAO-powered governance and dispute resolution",
  "Community-driven platform development",
];
