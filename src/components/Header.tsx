"use client";

export default function Header() {
  return (
    <header className="bg-[var(--color-primary-600)] text-[var(--color-primary-100)] p-6 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Profil Saya</h1>
        <ul className="flex gap-6">
          <li>
            <a
              href="#about"
              className="hover:text-[var(--color-secondary-400)]"
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[var(--color-secondary-400)]"
            >
              Proyek
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-[var(--color-secondary-400)]"
            >
              Pengalaman
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[var(--color-secondary-400)]"
            >
              Kontak
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
