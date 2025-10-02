import React from 'react';

export default function Techs() {
  const techs = ['Веб-разработка', 'Мобильные приложения', 'UI/UX дизайн', 'Cloud Solutions'];

  return (
    <section className="py-16 bg-[#FFFFFF] max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-2xl font-semibold text-[#2C3E50]">Ключевые технологии</h3>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {techs.map(t => (
          <div key={t} className="p-6 border rounded-lg hover:shadow-lg transition cursor-pointer">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
