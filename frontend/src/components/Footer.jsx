import React from "react";
import { motion } from "framer-motion";
import { Car, Github, Twitter } from "lucide-react";

export function Footer() {
  const date = new Date();
  const yrs = date.getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Car className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              DeCarShare
            </span>
          </motion.a>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              whileHover={{ scale: 1.1 }}
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">
            &copy; {yrs} DeCarShare. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
