import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { AnimatedTitle, Button, Card } from "./ui";
import {verificationSteps} from "../constant";

export function VerificationSection() {
  return (
    <section>
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedTitle className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center lg:text-left">
                Vehicle Verification
              </AnimatedTitle>
            </motion.div>

            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              {verificationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-2 rounded-lg transition-colors"
                >
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Card className="p-4 md:p-6 lg:p-8 max-w-md mx-auto lg:ml-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 text-center lg:text-left">
                  Start Verification Now
                </h3>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Vehicle Registration Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter registration number"
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your wallet address"
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm md:text-base py-2 md:py-3">
                  Begin Verification
                </Button>

                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center">
                  Your information is securely stored on the blockchain
                </p>
              </motion.form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerificationSection;