"use client";

import Link from "next/link";
import { useState } from "react";

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-blue-600 text-white shadow-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Work Manager
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/add-task" className="hover:text-blue-200 transition">
              Add Task
            </Link>
          </li>

          <li>
            <Link href="/show-task" className="hover:text-blue-200 transition">
              Show Task
            </Link>
          </li>
        </ul>

        {/*  Buttons (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="rounded-md border border-white px-4 py-1 hover:bg-white hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-md bg-pink-700 px-4 py-1 text-white hover:bg-pink-400 transition"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 text-black px-6 py-5">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/add-task" onClick={() => setIsOpen(false)}>
                Add Task
              </Link>
            </li>

            <li>
              <Link href="/show-task" onClick={() => setIsOpen(false)}>
                Show Task
              </Link>
            </li>

            <hr className="border-blue-500" />

            <li>
              <Link
                href="/#"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-white px-4 py-1 text-white bg-green-700 hover:bg-green-400  transition"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                href="/#"
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-pink-700 px-4 py-1 text-white hover:bg-pink-400 transition"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
