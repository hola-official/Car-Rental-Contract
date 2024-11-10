import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { reasons } from "../constant";
import { AnimatedTitle, Button, Card } from "./ui";

export function WhyChooseUsSection() {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedTitle className="text-white text-left">
              Why Choose DeCarShare?
            </AnimatedTitle>
            <ul className="space-y-4">
              {reasons.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <Card className="p-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-6 text-gray-800"
            >
              Join DeCarShare Today
            </motion.h3>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="wallet"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Wallet Address
                </label>
                <input
                  type="text"
                  id="wallet"
                  placeholder="Enter your wallet address"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button className="w-full bg-blue-700 hover:bg-blue-800">
                Connect Wallet
              </Button>
            </motion.form>
          </Card>
        </div>
      </div>
    </section>
  );
}
