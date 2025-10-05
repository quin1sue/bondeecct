"use client";

import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { toast } from "sonner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (_error, query) => {
            toast.error(query.meta?.errorMessage as string);
          },
        }),
        mutationCache: new MutationCache({
          onError: (_error, _variables, _context, mutation) => {
            toast((mutation.meta?.errorMessage as string) || "may error ya", {
              description: "Test",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            });
          },
          onSuccess: (_data, _variables, _context, mutation) => {
            if (mutation.meta?.successMessage) {
              console.log(mutation.meta?.successMessage as string);
              toast((mutation.meta?.successMessage as string) || "tagompai", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              });
            }
          },
        }),
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
          },
          mutations: {
            retry: 0,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
