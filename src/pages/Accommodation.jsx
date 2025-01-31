import React from "react";
import Accommodations from "../components/Accommodations/Accommodations";
import Cafe from "@/components/Accommodations/Cafe";
import Food from "@/components/Accommodations/Food";
import Footer from "@/components/Footer";
import Particle from "@/components/Particle";
import ParticleBackground from "@/components/Accommodations/ParticleBackground";
import { Navbar } from "@/components/Navbar/Navbar";

const Accommodation = () => {
  return (
    <div>
      <Navbar/>
      <ParticleBackground />
      <Accommodations />
      <Particle />
      <Cafe />
      <Particle/>
      <Food />
      <Footer />
    </div>
  );
};

export default Accommodation;
