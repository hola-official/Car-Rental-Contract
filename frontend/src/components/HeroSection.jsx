import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui";
import CarRent from "../assets/BlockchainIlus.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Decentralized
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-blue-600"
              >
                Peer-to-Peer Car Rental
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
            >
              Experience the future of car sharing with our blockchain-powered
              platform. Secure, transparent, and effortlessly decentralized.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button>Start Renting</Button>
              <Button variant="outline">Learn More</Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt="Decentralized Car Sharing"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                src={CarRent}
                className="absolute -bottom-10 -left-10 w-48 h-48 object-contain"
              />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 right-0 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-center font-bold text-xl transform"
            >
              Web3 Powered
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
