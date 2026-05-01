"use client";

import Navbar from "./components/Navbar";
import FresherHero from "./components/FresherHero";
import AboutMe from "./components/AboutMe";
import ProjectShowcase from "./components/ProjectShowcase";
import TechnicalFoundations from "./components/TechnicalFoundations";
import ExecutiveContact from "./components/ExecutiveContact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <FresherHero />
      <AboutMe />
      <ProjectShowcase />
      <TechnicalFoundations />
      <ExecutiveContact />
    </main>
  );
}
