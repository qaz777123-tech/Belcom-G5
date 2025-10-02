import React from 'react';

export default function About() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold text-[#2C3E50]">О компании</h2>
      <p className="mt-4 text-gray-600 text-lg">
        BELCOM решает задачи клиентов с помощью современных технологий. Мы фокусируемся на результате, прозрачности работы и использовании современного стека технологий.
      </p>
      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg">Фокус на результате</div>
        <div className="p-4 border rounded-lg">Современный стек технологий</div>
        <div className="p-4 border rounded-lg">Прозрачность работы</div>
      </div>
    </section>
  );
}
