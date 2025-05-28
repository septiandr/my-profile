"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const moveImgRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const text = "Septian D Risanggalih";

  const [displayText, setDisplayText] = useState("");

  const handleMove = (e: MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / 30;
    const y = (e.clientY - window.innerHeight / 2) / 30;

    gsap.to(moveImgRef.current, {
      x,
      y,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1 },
        {
          scale: 2,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        bgRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            end: 500,
            scrub: 0.5,
          },
        }
      );
    }, heroRef);

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) clearInterval(interval);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.from(spanRef.current, {
      opacity: 0,
      y: -10,
      duration: 2,
      delay: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative not-first:relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-[var(--color-primary-800)] text-[var(--color-primary-100)] overflow-hidden"
      >
        <div
          ref={bgRef}
          className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center z-10"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-secondary-500)] to-transparent pointer-events-none" />

        <div
          ref={moveImgRef}
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-[var(--color-secondary-500)] shadow-xl mb-8 relative z-10"
        >
          <img
            ref={imgRef}
            src="/profile.jpeg"
            alt="Foto Saya"
            className="w-full h-full object-cover will-change-transform"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
          Halo, Saya{" "}
          <span
            ref={spanRef}
            className="text-[var(--color-secondary-400)] inline-block"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-[var(--color-primary-300)] relative z-10">
          Saya adalah seorang <strong>Software Engineer</strong> dengan
          pengalaman bekerja di berbagai perusahaan dan menangani beragam proyek
          korporat. Saya fokus membangun antarmuka web modern{" "}
        </p>

        <a
          href="wa.me/6285646444805"
          className="mt-10 px-6 py-3 bg-[var(--color-secondary-600)] hover:bg-[var(--color-secondary-700)] text-white text-lg rounded-full shadow-md transition-all duration-300 relative z-10"
        >
          Hubungi Saya
        </a>
      </section>
    </>
  );
}
