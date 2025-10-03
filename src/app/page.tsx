import { EventCards } from "@/components/custom/index/eventcard.index";
import { Header } from "@/components/custom/index/hero.index";
import { Nav } from "@/components/custom/index/nav.index";
import { SubFooter } from "@/components/custom/index/subfooter.index";
import { Verification } from "@/components/custom/index/verification";

type SearchParams = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};
export default async function Home({ searchParams }: SearchParams) {
  const url = (await searchParams)?.tab;
  return (
    <>
      {url == "verification" ? (
        <Verification />
      ) : (
        <main className="relative">
          <Nav position="fixed" />
          <Header />
          <EventCards />
          <SubFooter />
        </main>
      )}
    </>
  );
}
