"use client";
import { useForm } from "react-hook-form";
import { Nav } from "@/components/custom/events/nav.events";

type EventFormData = {
  title: string;
  by: string;
  date: string;
  time: string;
  image: string;
  description: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EventFormData>({ mode: "onChange" });

  const onSubmit = (data: EventFormData) => {
    console.log("Form data:", data);
  };

  return (
    <>
      <Nav />
      <main className="flex flex-col w-full items-center justify-center min-h-[80vh] bg-gray-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-red-700">Create Event</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Event Title */}
            <div>
              <label htmlFor="title" className="block mb-1 font-medium">
                Event Title
              </label>
              <input
                id="title"
                className="w-full border p-2 rounded"
                {...register("title", { required: "Title is required" })}
                placeholder="Event Title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Organizer */}
            <div>
              <label htmlFor="by" className="block mb-1 font-medium">
                Organizer
              </label>
              <input
                id="by"
                className="w-full border p-2 rounded"
                {...register("by", { required: "Organizer is required" })}
                placeholder="Organizer"
              />
              {errors.by && (
                <p className="text-red-500 text-sm">{errors.by.message}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block mb-1 font-medium">
                Date
              </label>
              <input
                type="date"
                id="date"
                {...register("date", { required: "Date is required" })}
                className="w-full border p-2 rounded"
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block mb-1 font-medium">
                Time
              </label>
              <input
                type="time"
                id="time"
                className="w-full border p-2 rounded"
                {...register("time", { required: "Time is required" })}
              />
              {errors.time && (
                <p className="text-red-500 text-sm">{errors.time.message}</p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block mb-1 font-medium">
                Image URL
              </label>
              <input
                id="image"
                className="w-full border p-2 rounded"
                {...register("image", {
                  required: "Image URL is required",
                  pattern: {
                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                    message:
                      "Enter a valid image URL (png, jpg, jpeg, gif, webp)",
                  },
                })}
                placeholder="https://example.com/image.jpg"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block mb-1 font-medium">
                Description
              </label>
              <textarea
                id="description"
                className="w-full border p-2 rounded"
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Description"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-2 rounded text-white transition ${
                isValid
                  ? "bg-red-700 hover:bg-red-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Page;
