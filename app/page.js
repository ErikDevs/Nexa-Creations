import Whyus from "@/components/Whyus";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Counter from "@/components/counter";
import Hero from "@/components/hero";
import Introduction from '@/components/introduction'
import Price from "@/components/price";
import Tag from "@/components/tag";

export default function Home() {
  return (
    <main className="mx-[10%]" >
      <Hero />
      <Counter />
      <Introduction />
      <Whyus />
      <Tag />
      <Price />
      <Contact />
      <Blog />
    </main>
  )
}
