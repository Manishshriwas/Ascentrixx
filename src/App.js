import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import CTABanner from './components/sections/CTABanner';
import Contact from './components/sections/Contact';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.body.style.background = '#f0f4ff';
      document.body.style.color = '#0f172a';
    } else {
      document.body.style.background = '#020818';
      document.body.style.color = '#e2e8f0';
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isLight ? 'bg-slate-50 text-slate-900' : 'bg-dark-900 text-slate-200'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <Services theme={theme} />
        <About theme={theme} />
        <Stats theme={theme} />
        {/* <Testimonials theme={theme} /> */}
        <CTABanner theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
