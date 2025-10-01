import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export const EventCard = ({ event_name }: { event_name: string }) => {
  return (
    <article
      className="w-[50vw] rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      <header className="px-4 py-2">
        <p className="font-bold text-lg">Made By:</p>
        <p className="text-sm text-gray-500 line-clamp-3 mt-2">
          asdkjhajkdhkajhasdadadadladjalkjdalkjdklajdlasjdlkajdklajdklajdklajdklajdkjahdkjahsdkhajkdhkajdhkajdhakjshdjk
          asdassadassada asda dsadassadasdashdjkh ajksdh akjshd kjash
          dkjahskdjah skjhaskjdhaskjdha ksjdhjkkajshdka jshdkjash dkja
          hkjahdkjashdkjashdkjashdkjahkshdkajsdhak jh
        </p>
      </header>
      <div className="relative w-full h-[200px] bg-gray-200">
        <Image
          src="/event-cct.jpg"
          alt="Event Thumbnail"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <Link
            href={`/events/${event_name}`}
            className="text-lg font-bold text-gray-800 hover:text-red-700 transition-colors"
          >
            Sample Event Title
          </Link>

          <div className="flex items-center text-sm text-gray-600 mt-1">
            <FaCalendarAlt className="mr-2 text-red-700" />
            <span>July 25, 2025</span>
          </div>

          <div className="flex items-center text-sm text-gray-600 mt-1">
            <FaMapMarkerAlt className="mr-2 text-red-700" />
            <span>City College of Tagaytay</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {["Music", "Free", "Outdoor"].map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-red-200 text-red-800 rounded-full text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <Link
            href={`/events/${event_name}`}
            className="inline-block px-5 py-2 text-sm bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </article>
  );
};
