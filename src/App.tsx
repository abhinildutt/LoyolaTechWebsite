import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';

function App() {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <CustomCursor />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Services />
      <Values />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
