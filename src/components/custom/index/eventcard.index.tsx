import Image from "next/image";

export const EventCards = () => (
  <section className="w-full px-6 py-10 bg-gray-50">
    <h2 className="text-2xl font-bold mb-6 text-red-500">Upcoming Events</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((_, idx) => (
        <div
          key={idx}
          className="border rounded-xl p-4 shadow hover:shadow-md transition bg-white"
        >
          <Image
            height={900}
            width={900}
            src="/event-cct.jpg"
            alt="Event"
            className="rounded-lg mb-3 w-full h-40 object-cover"
          />
          <h3 className="font-semibold text-lg">Sample Event Title</h3>
          <p className="text-sm text-gray-600">Tagaytay • July 20 • Music</p>
        </div>
      ))}
    </div>
  </section>
);
