import { Button } from "@/components/ui/button";

type EventCardProps = {
  title: string;
  date: string;
  status: "Upcoming" | "Ended" | "Cancelled";
};

export const EventCardsAdm = ({ title, date, status }: EventCardProps) => {
  const statusColor =
    status === "Upcoming"
      ? "text-green-600"
      : status === "Ended"
      ? "text-gray-500"
      : "text-red-500";

  return (
    <div className="bg-white shadow rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-500 mb-2">{date}</p>
        <span className={`text-sm font-semibold ${statusColor}`}>{status}</span>
      </div>

      <div className="mt-4 flex space-x-2">
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
        <Button variant={"destructive"} size={"sm"}>
          Entries
        </Button>
      </div>
    </div>
  );
};
