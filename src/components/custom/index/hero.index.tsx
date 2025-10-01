import Link from "next/link";
import { signInWithGoogle } from "@/utils/supabase/auth";
export const Header = () => (
  <>
    <section className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center px-8 py-10">
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight">
            Discover Events. <br /> Join Communities.
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            Bondee lets you explore and register for public events that match
            your interests. Search by tags, trends, or nearby happenings — all
            in one place.
          </p>
          <Button
            onClick={signInWithGoogle}
            className="inline-block px-6 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-200 shadow-md"
          >
            Login
          </Button>
        </div>
      </div>
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: "url('/event-cct.jpg')" }}
      >
        <div className="w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-white to-transparent absolute z-10" />
      </div>
    </section>
    <EventSelections />
  </>
);

import { FaMusic } from "react-icons/fa";
import { GiCampCookingPot } from "react-icons/gi";
import { SiYoutubegaming } from "react-icons/si";
import { IoBusiness } from "react-icons/io5";
import { PiDiscoBallLight } from "react-icons/pi";
import { IconType } from "react-icons";
import { Button } from "@/components/ui/button";

export const EventSelections = () => {
  const events: { icon: IconType; name: string }[] = [
    { icon: FaMusic, name: "Music" },
    { icon: GiCampCookingPot, name: "Food" },
    { icon: SiYoutubegaming, name: "Gaming" },
    { icon: IoBusiness, name: "Business" },
    { icon: PiDiscoBallLight, name: "Party" },
  ];

  return (
    <section className="h-[20vh] w-full flex justify-center border-t px-6 py-4">
      <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
        {events.map(({ icon: Icon, name }, idx) => {
          const params = new URLSearchParams({
            name: name,
            status: "active",
          });
          return (
            <Link
              href={`/events?${params.toString()}`}
              key={idx}
              className="flex hover:cursor-pointer flex-col items-center justify-center p-4 rounded-lg shadow-sm min-w-[100px] hover:bg-red-100 transition"
            >
              <Icon className="text-3xl text-red-500 mb-2" />
              <span className="text-sm font-medium">{name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
