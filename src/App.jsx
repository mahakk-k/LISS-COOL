import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import DemoPage from './pages/DemoPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case 'features':
        return <FeaturesPage setCurrentPage={setCurrentPage} />;
      case 'pricing':
        return <PricingPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      case 'demo':
        return <DemoPage setCurrentPage={setCurrentPage} />;
      case 'login':
        return <LoginPage setCurrentPage={setCurrentPage} />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  const hideFooter = currentPage === 'demo' || currentPage === 'login';

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-grow pt-20">
        {renderPage()}
      </div>
      {!hideFooter && <Footer setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
