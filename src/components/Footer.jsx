"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Work Manager</h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Work Manager helps you organize daily tasks efficiently. Create,
              manage, and track your work in one place with a clean and powerful
              experience.
            </p>
          </div>

          {/* Add Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Important Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="hover:text-white transition">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href="/show-task" className="hover:text-white transition">
                  Show Tasks
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 border-t  border-slate-700" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Work Manager. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
