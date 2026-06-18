import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Transformation from "@/components/Transformation";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import WhoItsFor from "@/components/WhoItsFor";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import RequestForm from "@/components/RequestForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Transformation />
        <HowItWorks />
        <WhatYouGet />
        <WhoItsFor />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <RequestForm />
      </main>
      <Footer />
    </>
  );
}
