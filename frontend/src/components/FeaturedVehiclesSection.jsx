import React, { useState } from "react";
import { motion } from "framer-motion";
import { vehicles } from "../constant";
import { AnimatedTitle, Button, Card } from "./ui";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Slider } from "../ui/slider";
import { Car } from "lucide-react";

export function FeaturedVehiclesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 0.2]); // ETH
  const [selectedType, setSelectedType] = useState("all");

  const filteredVehicles = vehicles.filter(
    (car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      car.price >= priceRange[0] &&
      car.price <= priceRange[1] &&
      (selectedType === "all" || car.type.includes(selectedType))
  );

  return (
    <section>
      <div className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedTitle>Featured Vehicles</AnimatedTitle>

          <div className="max-w-4xl mx-auto w-full mb-8 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="text"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow"
              />
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Vehicle Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Electric">Electric</SelectItem>
                  <SelectItem value="SUV">SUV</SelectItem>
                  <SelectItem value="Sports">Sports</SelectItem>
                  <SelectItem value="Truck">Truck</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Price Range (ETH)
              </label>
              <Slider
                min={0}
                max={0.2}
                step={0.01}
                value={priceRange}
                onValueChange={setPriceRange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>{priceRange[0]} ETH</span>
                <span>{priceRange[1]} ETH</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredVehicles.map((car, index) => (
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
                    <span className="text-blue-600 font-bold">
                      {car.price} ETH
                    </span>
                    <Button variant="outline" className="text-sm px-4 py-2">
                      Rent Now
                    </Button>
                  </motion.div>
                </div>
              </Card>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Car className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No vehicles found matching your criteria
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
