import React from "react";
import { TopBanner } from "@/components/landing/TopBanner";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { ActionLine } from "@/components/landing/ActionLine";
import { AboutSection } from "@/components/landing/AboutSection";

const Index = () => {
  return (
    <main className="bg-white flex flex-col items-stretch">
      <header className="bg-white flex w-full flex-col items-stretch font-normal max-md:max-w-full">
        <TopBanner />
        <Navigation />
      </header>
      <Hero />
      <ActionLine />
      <AboutSection />
    </main>
  );
};

export default Index;
