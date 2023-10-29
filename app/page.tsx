import Delivery from "@/components/Delivery";
import Details from "@/components/Details";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Vibe from "@/components/Vibe";

export default function Home() {
  return (
    <div>
      <Hero />
      <Vibe />
      <Menu />
      <Delivery />
      <Details />
    </div>
  );
}
