import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition, ScrollProgress, ScrollRestoration, ScrollToTopButton } from './components/Chrome';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { ProductCategoryPage } from './pages/ProductCategoryPage';
import { Manufacturing } from './pages/Manufacturing';
import { Sustainability } from './pages/Sustainability';
import { Certifications } from './pages/Certifications';
import { CertificationPage } from './pages/CertificationPage';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-full flex-col bg-ivory">
        <ScrollProgress />
        <ScrollRestoration />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
          
          Skip to content
        </a>
        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductCategoryPage />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/certifications/:slug" element={<CertificationPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>
        <Footer />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>);

}