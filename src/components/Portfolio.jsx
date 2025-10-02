import React from 'react';
import { PORTFOLIO } from '../data';

export default function Portfolio() {
  return (
    <section className="py-16 bg-[#E8F2FC] max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-2xl font-semibold text-[#2C3E50]">Портфолио</h3>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PORTFOLIO.map(p => (
          <div key={p.id} className="p-4 border rounded-lg hover:shadow-lg transition">
            <div className="text-gray-700 font-medium mb-2">{p.title}</div>
            <div className="text-gray-600 text-sm">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
