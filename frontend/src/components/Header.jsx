import React from "react";
import { motion } from "framer-motion";
import { Car, ChevronRight } from "lucide-react";
import { Button } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b border-blue-100 dark:border-gray-700">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Car className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            DeCarShare
          </span>
        </motion.a>
        <Button variant="outline" className="flex items-center">
          Connect Wallet
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
