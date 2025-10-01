"use client";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

type SuggestionFormInputs = {
  title: string;
  category: string;
  description: string;
};

export const SgForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose?: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SuggestionFormInputs>();

  const onSubmit = (data: SuggestionFormInputs) => {
    console.log("Form data:", data);
    // test
    reset();
  };
  if (!isOpen) return null;
  return (
    <main
      className={`fixed inset-0 z-40 ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center bg-gray-600/40`}
    >
      <section className="z-50 relative bg-white rounded-xl shadow-lg border border-gray-200 w-[90%] max-w-md p-6 animate-fadeIn">
        <article className="w-full flex justify-between items-center mb-2">
          <h3 className="text-2xl font-bold text-gray-800">
            Post a Suggestion
          </h3>
          <Button
            variant={"default"}
            className="hover:cursor-pointer"
            onClick={onClose}
          >
            &#10006;
          </Button>
        </article>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              placeholder="Enter your suggestion title"
              {...register("title", { required: "Title is required" })}
              className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
            {errors.title && (
              <span className="text-red-600 text-xs mt-1">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              {...register("category", { required: "Category is required" })}
              className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
            >
              <option value="">Select a category</option>
              <option value="Event Improvement">Event Improvement</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Other">Other</option>
            </select>
            {errors.category && (
              <span className="text-red-600 text-xs mt-1">
                {errors.category.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Describe your suggestion..."
              {...register("description", {
                required: "Description is required",
              })}
              className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
            {errors.description && (
              <span className="text-red-600 text-xs mt-1">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={() => reset()}
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-red-700 text-white hover:bg-red-800"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};
