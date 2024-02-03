import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Ourphilosophy from "./components/Ourphilosophy";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

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
