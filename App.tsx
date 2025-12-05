import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Professionals from './components/Professionals';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import InfoMaterial from './components/InfoMaterial';

type View = 'home' | 'info';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // If we are navigating to an anchor
      if (currentView !== 'home') {
        setCurrentView('home');
        // Wait for render, then scroll
        setTimeout(() => {
          scrollToSection(href);
        }, 100);
      } else {
        scrollToSection(href);
      }
    } else if (href === '/informasjonsmateriell') {
      setCurrentView('info');
      window.scrollTo(0, 0);
    }
  };

  const scrollToSection = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigation} currentPage={currentView} />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <Services />
            <About />
            <Professionals />
            <FAQ />
          </>
        ) : (
          <InfoMaterial />
        )}
      </main>
      
      <Contact />
      <ChatWidget />
    </div>
  );
}

export default App;