"use client";

import { useContext, createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { DataType } from "@/utils/type";
import { toast } from "sonner";
import { UserRole } from "@/generated/prisma";

type User = {
  email: string;
  department: string;
  id: string;
  name: string;
  role: UserRole;
};

const userContext = createContext<User | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error, isLoading } = useQuery<User, Error>({
    queryKey: ["userFetch"],
    queryFn: async (): Promise<User> => {
      const response = await fetch("/api/graphql/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
                query {
                    fetchUser {
                        email
                        department
                        id
                        name
                        role
                        }
                    }
            `,
        }),
      });

      if (!response.ok) {
        console.error("an error has occured");
      }

      const result = await response.json();

      if (result.errors) {
        toast.error("An internal server error has occured");
      }

      return result.data.fetchUser;
    },
  });
  if (isLoading) return <>lodeng...</>;
  if (error) return <p>Failed to load user data</p>;
  return <userContext.Provider value={data}>{children}</userContext.Provider>;
};

export const useUser = () => {
  const user = useContext(userContext);
  if (!user) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return user;
};
