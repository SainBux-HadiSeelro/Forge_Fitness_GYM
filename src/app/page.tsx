import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Trainers from "@/components/sections/Trainers";
import Memberships from "@/components/sections/Memberships";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Memberships />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
