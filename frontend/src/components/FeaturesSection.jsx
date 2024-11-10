import React from "react";
import { motion } from "framer-motion";
import { AnimatedTitle, Card } from "./ui";
import { features } from "../constant";

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <AnimatedTitle>Decentralized Features</AnimatedTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-xl font-semibold mb-2"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="text-gray-600 dark:text-gray-300"
              >
                {feature.description}
              </motion.p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
