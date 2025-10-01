import { EventCards } from "@/components/custom/index/eventcard.index";
import { Header } from "@/components/custom/index/hero.index";
import { Nav } from "@/components/custom/index/nav.index";
import { SubFooter } from "@/components/custom/index/subfooter.index";
export default function Home() {
  return (
    <main className="relative">
      <Nav position="fixed" />
      <Header />
      <EventCards />
      <SubFooter />
    </main>
  );
}
