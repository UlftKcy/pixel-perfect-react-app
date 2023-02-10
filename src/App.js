import './App.css';
import CTA from './components/cta/CTA';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Integrations from './components/integrations/Integrations';

function App() {
  return (
    <div className="w-[90rem]">
      <Hero />
      <Features />
      <Integrations />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
