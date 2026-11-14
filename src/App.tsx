import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import type { PageId } from './types';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const PAGE_IDS: PageId[] = ['home', 'services', 'about', 'contact'];

function isPageId(page: string): page is PageId {
  return PAGE_IDS.some((pageId) => pageId === page);
}

function getPageFromHash(): PageId | null {
  const page = window.location.hash.slice(1);
  return isPageId(page) ? page : null;
}

export function App() {
  const [activePage, setActivePage] = useState<PageId>(
    () => getPageFromHash() ?? 'home'
  );

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      if (page) {
        setActivePage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    if (window.location.hash !== `#${page}`) {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <main className="flex-grow">
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      <ChatbotWidget />
      <Footer onNavigate={handleNavigate} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;