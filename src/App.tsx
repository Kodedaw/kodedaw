import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Services from './components/Services';
import Clients from './components/Clients';
import Insights from './components/Insights';
import Footer from './components/Footer';

type ThemeMode = 'dark' | 'light';

function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const storedTheme = localStorage.getItem('theme-mode');
    return storedTheme === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-mode', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-dark text-foreground overflow-x-hidden transition-colors duration-500">
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Hero />
      <FeaturedWork />
      <Services />
      <Clients />
      <Insights />
      <Footer />
    </div>
  );
}

export default App;
