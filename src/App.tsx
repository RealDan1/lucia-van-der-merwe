import './App.css';
import { Routes, Route, Link } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import { useEffect, useState } from 'react';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav>
        <div className="logo-container">
          <Link to="/" className="heading">
            LUCIA VAN DER MERWE
          </Link>
          <div className="logo-quote">Empowering minds, transforming lives</div>
        </div>
        <div className="links-container">
          <Link to="/" className="link-item">
            Home
          </Link>
          <Link to="/about" className="link-item">
            About
          </Link>
          <Link to="/contact" className="link-item">
            Contact
          </Link>
          <Link to="/newsletter" className="link-item">
            Newsletter
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>

      <footer className="footer">
        <p>All Rights Reserved</p>
        <div className="footer-links">
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |{' '}
          <Link to="/newsletter">Newsletter</Link>
        </div>
      </footer>

      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}
    </>
  );
}

export default App;
