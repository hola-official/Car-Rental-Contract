import React from "react";
import { motion } from "framer-motion";
import { steps } from "../constant";
import { AnimatedTitle, Card } from "./ui";

export function HowItWorksSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <AnimatedTitle>How It Works</AnimatedTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
              >
                {index + 1}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-xl font-semibold mb-2"
              >
                {step.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="text-gray-600 dark:text-gray-300"
              >
                {step.description}
              </motion.p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
