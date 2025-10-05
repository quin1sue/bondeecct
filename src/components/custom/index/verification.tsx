"use client";
import { Logo, PicLogo } from "../global/Logo";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export default function Verification() {
  const route = useRouter();
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/graphql/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query {
              verifyUser {
                isSuccess
                status
                message
              }
            }
          `,
        }),
      });

      if (!response.ok) {
        console.error("Network error:", response.status);
      }

      let result = await response.json();
      if (result.errors) {
        throw new Error(result.errors[0].message);
      }
      return result.data.verifyUser;
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // idk but i think this is dirty... ?
    e.preventDefault();
    try {
      const data = await mutation.mutateAsync();
      if (data.status === 403) {
        toast.error(data.message);
        setTimeout(() => {
          route.push("/");
        }, 2000);
      } else if (data.isSuccess) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err: any) {
      toast.error("Verification failed");
      console.error(err);
    }
  };

  return (
    <main className="flex flex-col text-center space-y-2 justify-center items-center bg-black/95 h-screen w-full">
      <section className="text-white">
        <article className="mb-2 flex items-center space-x-2">
          <PicLogo /> <Logo />
        </article>
      </section>

      <form onSubmit={onSubmit}>
        <Button type="submit" className="hover:cursor-pointer">
          Click here to verify your CCT gmail
        </Button>
      </form>
    </main>
  );
}
