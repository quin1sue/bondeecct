import { Button } from "@/components/ui/button";
import { Logo, PicLogo } from "../global/Logo";

export const Verification = () => {
  return (
    <main className="flex flex-col text-center space-y-2 justify-center items-center bg-black/95 h-screen w-full">
      <section className="text-white">
        <article className="mb-2 flex items-center space-x-2">
          <PicLogo /> <Logo />
        </article>
      </section>
      <Button className="hover:cusor-pointer">
        Click here to<u>verify</u>your email
      </Button>
    </main>
  );
};
