import React from 'react';

export default function CTA() {
  return (
    <section className="py-16 text-center bg-[#FFFFFF]">
      <h3 className="text-2xl font-semibold text-[#2C3E50]">Готовы начать?</h3>
      <a
        href="/contacts"
        className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Связаться
      </a>
    </section>
  );
}
