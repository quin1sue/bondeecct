"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { Logo } from "../global/Logo";
import { Button } from "@/components/ui/button";
import { SgForm } from "./suggestionform";

export const Nav = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openForm, isOpenForm] = useState<boolean>(false);

  const handleFocus = (): void => {
    inputRef.current?.focus();
  };

  return (
    <>
      <SgForm isOpen={openForm} onClose={() => isOpenForm(false)} />
      <nav className="w-full backdrop-blur-md border-b shadow-sm bg-white sticky top-0 z-30">
        <div className="flex justify-between items-center px-6 h-[12vh]">
          <Logo />

          <section className="hidden md:flex h-[6vh] w-[30vw] items-center justify-center relative">
            <input
              disabled={openForm}
              type="text"
              ref={inputRef}
              placeholder="Search events..."
              className={`${
                openForm ? "hover:cursor-not-allowed" : ""
              } w-full h-full rounded-full border border-gray-300 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-700 shadow-sm`}
            />
            <button
              type="submit"
              className="hover:cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-red-700 hover:text-red-800"
            >
              <FiSearch size={20} />
            </button>
          </section>

          <ul className="hidden md:flex items-center space-x-4 text-sm font-medium text-black">
            <Button
              variant={"destructive"}
              className="hover:cursor-pointer active:cursor-grab"
              disabled={openForm}
              onClick={handleFocus}
            >
              Explore Events
            </Button>
            <Button
              className="hover:cursor-pointer active:cursor-grab"
              variant={"default"}
              disabled={openForm}
              onClick={() => isOpenForm(true)}
            >
              Post a Suggestion
            </Button>
            <li>
              <p className="font-bold">Username</p>
            </li>
            <li className="relative group">
              <button className="flex items-center space-x-2 focus:outline-none hover:text-red-700">
                <FaRegUserCircle size={24} />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto z-50">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  href="/my-events"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  My Events
                </Link>
                <hr />
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                  Log Out
                </button>
              </div>
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-red-700 focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4">
            <div className="flex items-center relative mb-4">
              <input
                type="text"
                ref={inputRef}
                placeholder="Search events..."
                className="w-full rounded-full border border-gray-300 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-700 shadow-sm"
              />
              <button
                type="submit"
                className="hover:cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-red-700 hover:text-red-800"
              >
                <FiSearch size={20} />
              </button>
            </div>
            <ul className="flex flex-col space-y-3 text-sm font-medium text-black">
              <li onClick={handleFocus}>
                <p className="hover:text-gray-200 hover:cursor-pointer transition bg-red-700 p-2 text-white rounded-md">
                  Explore Events
                </p>
              </li>
              <Button variant={"destructive"}>Post a Suggestion</Button>
              <li>
                <p className="font-bold">Username</p>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  href="/my-events"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  My Events
                </Link>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};
