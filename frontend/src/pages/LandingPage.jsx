import React from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { FeaturedVehiclesSection } from "../components/FeaturedVehiclesSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <FeaturedVehiclesSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
}
