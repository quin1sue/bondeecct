import { Nav } from "@/components/custom/events/nav.events";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bondee | Profile",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex items-center w-full relative">{children}</main>
    </>
  );
}
