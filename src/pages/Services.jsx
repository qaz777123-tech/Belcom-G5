import React, { useState } from 'react';
import { SERVICES } from '../data';

export default function Services() {
  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-[#2C3E50]">Услуги</h2>
      <div className="mt-8 space-y-4">
        {SERVICES.map(s => (
          <div key={s.id} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setOpen(open === s.id ? null : s.id)}
              className="w-full px-4 py-3 text-left flex justify-between bg-[#F8F9FA] hover:bg-[#E8F2FC] transition"
            >
              <span>{s.title}</span>
              <span>{open === s.id ? '-' : '+'}</span>
            </button>
            {open === s.id && <div className="p-4 text-gray-600">{s.details}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
