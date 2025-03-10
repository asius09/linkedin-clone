import React from "react";
import {
  Hero,
  Features,
  Navbar,
  CallToAction,
  Testimonials,
  Footer,
} from "../Landing";

const Landing = () => {
  return (
    <main className="w-full h-full flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <CallToAction />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Landing;
