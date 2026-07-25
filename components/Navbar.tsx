"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-900/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold text-white transition hover:text-blue-400"
        >
          Ghozi.dev
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-slate-300 md:flex">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.href}
                className="transition hover:text-blue-400"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-slate-900 transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t border-slate-800" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg py-3 text-slate-300 transition hover:bg-slate-800 hover:text-blue-400"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}