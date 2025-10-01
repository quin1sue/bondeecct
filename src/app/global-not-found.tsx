import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BondeeCCT | Error",
  description: "The page you are looking for does not exist.",
};

type SearchParams = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function GlobalNotFound({ searchParams }: SearchParams) {
  const error = (await searchParams)?.error;

  let errorMessage: string =
    "Oops.. It seems you were redirected to an unknown route.";
  let httpCode: number = 404;
  if (error === "invalid-domain-gmail") {
    errorMessage =
      "Authentication failed: You must sign in with a valid @citycollegeoftagaytay.edu.ph email address";
    httpCode = 401;
  }

  return (
    <html lang="en" className={inter.className}>
      <body className="text-center h-screen w-full flex justify-center items-center">
        <section>
          {" "}
          <Image
            height={1400}
            width={1400}
            className="w-full h-[20%]"
            src="/bondee-mascot-error.png"
            alt="Bondee Mascot Error Crying Image"
          />{" "}
          <h4 className="font-bold">Error: {httpCode}</h4>
          <p className="font-bold">{errorMessage}</p>
        </section>
      </body>
    </html>
  );
}
