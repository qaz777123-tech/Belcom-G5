import React from 'react';

export default function Hero() {
  return (
    <section className="py-20 text-center bg-[#E8F2FC]">
      <h1 className="text-5xl font-bold text-[#2C3E50]">
        BELCOM: Современные IT-решения для вашего бизнеса
      </h1>
      <p className="mt-4 text-gray-700 text-lg">
        Технологии, которые работают на результат
      </p>
      <a
        href="/contacts"
        className="mt-8 inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Обсудить проект
      </a>
    </section>
  );
}
