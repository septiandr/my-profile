"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen px-6 py-20 bg-[linear-gradient(to_bottom,var(--color-primary-800),var(--color-primary-600))] text-[var(--color-primary-900)]"
    >
      <h2 className="text-3xl font-bold mb-6">Tentang Saya</h2>
      <p className="max-w-3xl leading-relaxed">
        Saya seorang developer frontend dengan fokus pada Next.js dan animasi
        menggunakan GSAP. Saya menyukai desain minimalis dan profesional.
      </p>
    </section>
  );
}
