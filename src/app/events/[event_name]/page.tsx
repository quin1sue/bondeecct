import { notFound } from "next/navigation";

interface EventPageProps {
  params: { event_name: string };
}

export default async function EventPage({ params }: EventPageProps) {
  const { event_name } = await params;

  const event = await getEventById(event_name);

  if (!event) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
      <p className="text-gray-600 mt-2">{event.date}</p>
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover rounded-lg my-6"
      />
      <p className="text-gray-700">{event.description}</p>
    </main>
  );
}

async function getEventById(id: string) {
  const events = [
    {
      id: "1",
      title: "Music Fest 2025",
      date: "July 25, 2025",
      image: "/event-cct.jpg",
      description: "Join us for a fun-filled music festival!",
    },
    {
      id: "2",
      title: "Tech Conference",
      date: "August 12, 2025",
      image: "/event-cct.jpg",
      description: "Learn the latest in tech and innovation.",
    },
  ];

  return events.find((e) => e.id === id);
}
