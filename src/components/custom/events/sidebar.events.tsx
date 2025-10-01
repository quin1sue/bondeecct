export const Sidebar = () => {
  return (
    <aside className="hidden md:block w-[15vw] h-[87vh] border-r px-4 py-6">
      <h2 className="text-lg font-bold mb-4 text-red-700">Filters</h2>

      <div className="space-y-3 text-sm">
        <div className="font-medium text-gray-700">Category</div>
        {["Music", "Gaming", "Food", "Business", "Party"].map((category, i) => (
          <label key={i} className="flex items-center space-x-2">
            <input type="checkbox" className="accent-red-700" />
            <span>{category}</span>
          </label>
        ))}

        <div className="mt-6 font-medium text-gray-700">Tags</div>
        <div className="flex flex-wrap gap-2">
          {["Upcoming", "Past Events", "New"].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 border rounded-full text-xs text-red-800 border-red-400 hover:bg-red-200 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};
