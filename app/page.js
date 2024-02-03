import AboutUs from "./components/us";
import Contact from "./components/form";
import Hero from "./components/landingPage";
import Introduction from "./components/whoarewe";
import Ourphilosophy from "./components/whatwebelieve";
import Projects from "./components/doing";
import Testimonials from "./components/whatclientssay";
import WhyChooseUs from "./components/why";

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
