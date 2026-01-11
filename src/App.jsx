import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Guide from './pages/Guide';
import Pricing from './pages/Pricing';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import VisualDiscoveryPage from './pages/VisualDiscoveryPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-inter text-slate-900 bg-slate-100">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/visuel-gmaologix" element={<VisualDiscoveryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
