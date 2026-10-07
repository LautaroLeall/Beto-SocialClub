import { useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import CustomCursor from './components/CustomCursor/CustomCursor';
import TopNav from './components/TopNav/TopNav';
import HeroSection from './components/HeroSection/HeroSection';
import ChismeSection from './components/ChismeSection/ChismeSection';
import LineupSection from './components/LineupSection/LineupSection';
import LenoSection from './components/LenoSection/LenoSection';
import ListSection from './components/ListSection/ListSection';
import LocationSection from './components/LocationSection/LocationSection';
import RulesSection from './components/RulesSection/RulesSection';
import EventFooter from './components/EventFooter/EventFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

function App() {
  useEffect(() => {
    // Catch-All Routing: Si alguien tipea una URL rota como elclubdebeto.com/holamundo
    // Vercel carga el index.html, y esta línea limpia la URL devolviéndolos a la raíz limpia "/".
    if (window.location.pathname !== '/') {
      window.history.replaceState(null, '', '/');
    }
  }, []);

  return (
    <SmoothScroll>
      <CustomCursor />
      <TopNav />
      <HeroSection />
      <ChismeSection />
      <LineupSection />
      <LenoSection />
      <ListSection />
      <LocationSection />
      <RulesSection />
      <EventFooter />
      <FloatingWhatsApp />
    </SmoothScroll>
  );
}

export default App;
