"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const projects = [
  { name: "Proyek A", desc: "Deskripsi proyek A" },
  { name: "Proyek B", desc: "Deskripsi proyek B" },
  { name: "Proyek C", desc: "Deskripsi proyek C" },
];

export default function Projects() {
  const projectRef = useRef(null);

  useEffect(() => {
    gsap.from(projectRef.current, {
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <section
      ref={projectRef}
      id="projects"
      className="min-h-screen px-6 py-20 bg-[var(--color-primary-200)] text-[var(--color-primary-900)]"
    >
      <h2 className="text-3xl font-bold mb-8">Proyek Saya</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[var(--color-primary-100)] p-6 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
