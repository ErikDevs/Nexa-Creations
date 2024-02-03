import {
  AboutUs,
  Contact,
  Hero,
  Introduction,
  Ourphilosophy,
  Projects,
  Testimonials,
  WhyChooseUs,
} from "@/components";

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
