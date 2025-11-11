import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import MinimalFooter from './components/MinimalFooter';
import SmoothScroll from './components/SmoothScroll';
// import CustomCursor from './components/CustomCursor'; // Disabled for performance
import PageLoader from './components/PageLoader';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
    <div className="min-h-screen">
      <PageLoader />
      {/* <CustomCursor /> */} {/* Disabled for performance */}
      <SmoothScroll />
      <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      <MinimalFooter />
    </div>
    </Router>
  );
}

export default App;
