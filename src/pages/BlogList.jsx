import React from 'react';
import { BLOG } from '../data';
import { useNavigate } from 'react-router-dom';

export default function BlogList() {
  const navigate = useNavigate();

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-[#2C3E50]">Блог</h2>
      <div className="mt-8 space-y-4">
        {BLOG.map(b => (
          <div
            key={b.id}
            className="p-4 border rounded-lg cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/blog/${b.id}`)}
          >
            <h3 className="text-xl font-medium text-[#2C3E50]">{b.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{b.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
