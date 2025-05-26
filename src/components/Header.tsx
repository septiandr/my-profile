"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // pastikan kamu install `lucide-react`

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[var(--color-primary-600)] text-[var(--color-primary-100)] p-6 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Profil Saya</h1>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menu */}
        <ul
          className={`flex flex-col md:flex-row gap-6 md:gap-6 md:items-center absolute md:static top-[100%] left-0 w-full md:w-auto bg-[var(--color-primary-600)] md:bg-transparent transition-all duration-300 ${
            isOpen ? "block p-6" : "hidden md:flex"
          }`}
        >
          <li>
            <a
              href="#about"
              className="hover:text-[var(--color-secondary-400)]"
              onClick={() => setIsOpen(false)}
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[var(--color-secondary-400)]"
              onClick={() => setIsOpen(false)}
            >
              Proyek
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-[var(--color-secondary-400)]"
              onClick={() => setIsOpen(false)}
            >
              Pengalaman
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[var(--color-secondary-400)]"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
