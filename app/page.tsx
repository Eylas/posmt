import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import ImageSection from "@/components/ImageSection";
import Navbar from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
      <ImageSection></ImageSection>
      <Cta></Cta>
      <Footer></Footer>
    </main>
  );
}
