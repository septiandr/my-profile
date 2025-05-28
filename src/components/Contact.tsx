"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.from(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.9,
      duration: 1,
    });
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="bg-primary-700 min-h-screen px-6 py-20 text-[var(--color-primary-100)]"
    >
      <h2 className="text-3xl font-bold mb-6">Kontak</h2>
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-3 rounded bg-[var(--color-primary-100)] text-[var(--color-primary-900)] border border-[var(--color-primary-400)]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-[var(--color-primary-100)] text-[var(--color-primary-900)] border border-[var(--color-primary-400)]"
        />
        <textarea
          placeholder="Pesan"
          className="w-full p-3 rounded bg-[var(--color-primary-100)] text-[var(--color-primary-900)] border border-[var(--color-primary-400)]"
          rows={5}
        />
        <button
          type="submit"
          className="bg-[var(--color-secondary-600)] hover:bg-[var(--color-secondary-700)] text-white px-6 py-3 rounded font-semibold"
        >
          Kirim
        </button>
      </form>
    </section>
  );
}
