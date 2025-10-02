import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-[#2C3E50]">BELCOM</Link>
        <nav className="space-x-4 hidden md:flex">
          <Link to="/services" className="hover:text-blue-600">Услуги</Link>
          <Link to="/blog" className="hover:text-blue-600">Блог</Link>
          <Link to="/contacts" className="hover:text-blue-600">Контакты</Link>
        </nav>
      </div>
    </header>
  );
}
