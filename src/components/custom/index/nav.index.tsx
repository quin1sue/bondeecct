"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Nav({
  position = "sticky",
}: {
  position?: "static" | "relative" | "fixed" | "absolute" | "sticky";
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-white backdrop-blur-md shadow-sm ${position} z-50 w-full`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo-web.png"
            height={40}
            width={40}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <Link href="/" className="text-2xl font-extrabold text-red-950">
            Bondee4CCT
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-black font-medium">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="/events" className="hover:text-red-600 transition-colors">
            Events
          </Link>
          <Link href="/about" className="hover:text-red-600 transition-colors">
            About
          </Link>
          <span className="text-gray-400">&#124;</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-3xl text-black"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-6 space-y-4 text-black">
          <Link href="/" className="block text-lg hover:text-red-600">
            Home
          </Link>
          <Link href="/events" className="block text-lg hover:text-red-600">
            Events
          </Link>
          <Link href="/about" className="block text-lg hover:text-red-600">
            About
          </Link>
          <Link
            href="/login"
            className="block text-center bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
