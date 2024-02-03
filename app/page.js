import AboutUs from "./components/aboutus";
import Contact from "./components/contactus";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import Ourphilosophy from "./components/ourphilosophy";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import WhyChooseUs from "./components/whyChooseUs";

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
