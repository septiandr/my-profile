"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/lib/gsap";
import { projects } from "@/constant";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Animasi judul
      const split = new SplitText(titleRef.current, {
        type: "chars,words",
      });

      gsap.from(split.chars, {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      cardRefs.current.forEach((card) => {
        if (!card) return;

        // Animasi muncul & hilang kartu saat scroll masuk/keluar viewport
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play reverse play reverse",
              // markers: true, // aktifkan untuk debug posisi scroll
            },
          }
        );

        // Parallax ringan saat scroll
        gsap.to(card, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isClient]);

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateY: x / 20,
      rotateX: -y / 20,
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-primary-700 min-h-screen px-6 py-28 text-[var(--color-primary-50)] overflow-hidden"
    >
      <div className="absolute w-[700px] h-[700px] bg-[var(--color-primary-200)] rounded-full blur-[160px] opacity-20 -z-10 top-1/3 right-1/4 transform -translate-y-1/2" />

      <h2
        ref={titleRef}
        className="text-5xl md:text-6xl font-extrabold mb-12 tracking-tight text-center text-[var(--color-secondary-700)]"
      >
        Proyek Saya
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto perspective-[1200px]">
        {projects.map((p, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => handleMouseLeave(i)}
            className="bg-[var(--color-primary-100)] text-[var(--color-primary-900)] p-6 rounded-2xl shadow-xl transform transition-all duration-300 ease-in-out cursor-pointer will-change-transform"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
            <p className="text-[var(--color-primary-800)]">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
