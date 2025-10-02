import React from 'react';
import { BLOG } from '../data';
import { useParams } from 'react-router-dom';

export default function BlogArticle() {
  const { id } = useParams();
  const article = BLOG.find(b => b.id === id);

  if (!article) return <div className="p-12 text-center">Статья не найдена</div>;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-[#2C3E50]">{article.title}</h1>
      <p className="text-gray-500 mt-2">{article.date}</p>
      <div className="mt-6 text-gray-700">
        {/* Здесь можно разместить полный текст статьи */}
        Полный текст статьи будет здесь.
      </div>
    </section>
  );
}
