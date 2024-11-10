import React from "react";
import { motion } from "framer-motion";
import { vehicles } from "../constant";
import { AnimatedTitle, Button, Card } from "./ui";

export function FeaturedVehiclesSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <AnimatedTitle>Featured Vehicles</AnimatedTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((car, index) => (
            <Card key={index} className="overflow-hidden">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-xl font-semibold mb-2"
                >
                  {car.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="text-gray-600 dark:text-gray-300 mb-4"
                >
                  {car.type}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-blue-600 font-bold">{car.price}</span>
                  <Button variant="outline" className="text-sm px-2 py-2">
                    Rent Now
                  </Button>
                </motion.div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
