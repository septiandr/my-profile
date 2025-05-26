"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        delay: 0.5,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 30,
        delay: 0.7,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    const handleMove = (e: MouseEvent) => {
      const rect = img.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 20;
      const y = (e.clientY - rect.top - rect.height / 2) / 20;

      gsap.to(img, {
        x,
        y,
        ease: "power2.out",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[var(--color-primary-700)] text-[var(--color-primary-100)]"
    >
      {/* Foto Profil */}
      <div
        ref={imageRef}
        className="w-32 h-32 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--color-secondary-500)] mb-6"
      >
        <img
          src="/profile.jpeg"
          alt="My Photo"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 ref={headingRef} className="text-4xl md:text-5xl font-extrabold mb-4">
        Halo, Saya Developer
      </h2>

      <p
        ref={textRef}
        className="text-lg max-w-xl text-[var(--color-primary-300)]"
      >
        Saya membangun antarmuka modern dengan Next.js, GSAP, dan desain
        minimalis profesional.
      </p>

      <button
        ref={buttonRef}
        className="mt-8 bg-[var(--color-secondary-600)] hover:bg-[var(--color-secondary-700)] text-white px-6 py-3 rounded-full font-semibold transition"
      >
        Hubungi Saya
      </button>
    </section>
  );
}
