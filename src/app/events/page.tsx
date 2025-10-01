import { EventCard } from "@/components/custom/events/eventcard.events";
import { Sidebar } from "@/components/custom/events/sidebar.events";

const Page = () => {
  return (
    <main className="flex items-center w-full">
      <Sidebar />

      <main className="flex-1 h-[87vh] overflow-y-auto px-6 py-4">
        <div className="grid grid-cols-1 gap-6 justify-items-center">
          {["1", "2", "3", "4", "5", "6"].map((id, i) => {
            return (
              <section key={i}>
                <EventCard event_name={id} />
              </section>
            );
          })}
        </div>
      </main>
    </main>
  );
};

export default Page;
