export default function DashboardPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center bg-white shadow p-6 rounded-lg">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-500">Manage your events here</p>
        </div>
        <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600">
          &#43; Create Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded text-center">
          <p className="text-gray-500">Total Events</p>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-white p-4 shadow rounded text-center">
          <p className="text-gray-500">Upcoming</p>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-white p-4 shadow rounded text-center">
          <p className="text-gray-500">Past Events</p>
          <p className="text-2xl font-bold">7</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <p>Events list will appear here</p>
      </div>
    </div>
  );
}
