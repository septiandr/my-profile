"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SECTION FADE IN
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // TITLE TEXT SPLIT ANIMATION
      const chars = titleRef.current?.querySelectorAll("span") || [];
      gsap.from(chars, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        ease: "power3.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      // PARAGRAPH FADE IN
      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen px-6 py-28 bg-gradient-to-b from-[#150d1a] to-[var(--color-primary-700)] text-white flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute w-[800px] h-[800px] bg-[var(--color-primary-500)] rounded-full blur-[160px] opacity-20 -z-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      {/* Title */}
      <h2
        ref={titleRef}
        className="text-5xl text-[var(--color-secondary-800)] md:text-6xl font-extrabold mb-8 tracking-tight"
      >
        {splitText("Tentang Saya")}
      </h2>

      {/* Paragraph */}
      <p
        ref={paragraphRef}
        className="max-w-2xl text-lg md:text-xl leading-relaxed text-white/80"
      >
        Saya seorang developer frontend dengan fokus pada Next.js dan animasi
        menggunakan GSAP. Saya menyukai desain yang minimalis, profesional, dan
        interaktif untuk memberikan pengalaman pengguna terbaik.
      </p>
    </section>
  );
}
