import React from 'react';

export default function MobileApps() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-[#2C3E50]">Мобильные приложения</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Мы создаем качественные мобильные приложения под iOS и Android с использованием React Native и Flutter.
      </p>
      <ul className="mt-6 list-disc list-inside text-gray-700">
        <li>Кроссплатформенная разработка</li>
        <li>Интуитивный UI/UX дизайн</li>
        <li>Интеграция с backend и облачными сервисами</li>
        <li>Поддержка и обновления приложений</li>
      </ul>
    </section>
  );
}
