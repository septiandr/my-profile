"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  }, []);

  const companies = [
    {
      name: "PT Teknologi Awan",
      role: "Frontend Developer",
      year: "2023 - Sekarang",
    },
    { name: "CV Digital Kreatif", role: "UI Designer", year: "2021 - 2023" },
    { name: "Startup XYZ", role: "Intern Developer", year: "2020 - 2021" },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-[linear-gradient(to_bottom,var(--color-primary-400),var(--color-primary-100))] min-h-screen px-6 py-20 text-[var(--color-primary-900)]"
    >
      <h2 className="text-3xl font-bold mb-6">Pengalaman Kerja</h2>
      <ul className="space-y-4">
        {companies.map((c, i) => (
          <li
            key={i}
            className="bg-[var(--color-primary-100)] p-4 rounded shadow"
          >
            <h3 className="text-xl font-semibold">{c.name}</h3>
            <p>{c.role}</p>
            <span className="text-sm text-[var(--color-primary-600)]">
              {c.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
