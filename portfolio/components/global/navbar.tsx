"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 *
        backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900
        justify-between"
    >
      <aside className="flex items-center gap-[2px]">
        <Link href="/">
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400">
            Vijay Ravichander
          </p>
        </Link>
      </aside>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 list-none text-xl">
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
        </ul>
      </nav>
      {/* Responsive Dropdown  */}
      <div className="block md:hidden">
        <button
          className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => {setIsOpen(!isOpen)}}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-blue-800/90 backdrop-blur-lg md:hidden">
          <nav className="p-4">
            <ul className="flex flex-col gap-4 list-none text-xl">
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
