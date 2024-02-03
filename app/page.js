import AboutUs from "@/app/components/AboutUs";
import Contact from "@/app/components/Contact";
import Hero from "@/app/components/Hero";
import Introduction from "@/app/components/Introduction";
import Ourphilosophy from "@/app/components/Ourphilosophy";
import Projects from "@/app/components/Projects";
import Testimonials from "@/app/components/Testimonials";
import WhyChooseUs from "@/app/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex-col m-auto">
      <Hero />
      <AboutUs />
      <Introduction />
      <Ourphilosophy />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
