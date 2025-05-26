'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Testimonials() {
  const testimonialRef = useRef(null);

  useEffect(() => {
    gsap.from(testimonialRef.current, {
      scrollTrigger: {
        trigger: testimonialRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  }, []);

  return (
    <section id="testimonials" ref={testimonialRef} className="min-h-screen px-6 py-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Testimoni</h2>
      <blockquote>&ldquo;Luar biasa bekerja dengan [Nama Anda]!&rdquo;</blockquote>
    </section>
  );
}
