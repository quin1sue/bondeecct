import { EventCardsAdm } from "@/components/custom/admin/eventcards.admin";
import { Button } from "@/components/ui/button";

export default function AdminEventsPage() {
  return (
    <main className="p-6 w-full">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-center mb-8">CCT Events</h1>

      {/* Search Bar */}
      <div className="flex items-center justify-center space-x-2 max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search an event"
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <Button className="bg-red-700 hover:bg-red-600 h-10 px-4">
          Search
        </Button>
      </div>
      <div className="flex justify-center space-x-4">
        <Button variant="outline">All</Button>
        <Button variant="outline">Upcoming</Button>
        <Button variant="outline">Past</Button>
        <Button variant="outline">Cancelled</Button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        <EventCardsAdm
          title="Sample Event 1"
          date="2025-09-01"
          status="Upcoming"
        />
        <EventCardsAdm
          title="Sample Event 2"
          date="2025-08-10"
          status="Ended"
        />
        <EventCardsAdm
          title="Sample Event 3"
          date="2025-07-20"
          status="Cancelled"
        />
        <EventCardsAdm
          title="Sample Event 4"
          date="2025-09-15"
          status="Upcoming"
        />
        <EventCardsAdm
          title="Sample Event 5"
          date="2025-06-30"
          status="Ended"
        />
      </section>
    </main>
  );
}
