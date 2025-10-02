import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const Contacts = lazy(() => import('./pages/Contacts'));
const MobileApps = lazy(() => import('./pages/MobileApps')); // новая страница

export default function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div className="text-center py-20">Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogArticle />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}
