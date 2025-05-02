import './App.css';
import { Routes, Route, Link } from 'react-router';
import Home from './components/Home';
import MainLayout from './components/MainLayout';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <>
      <nav>
        <p className="heading">LUCIA VAN DER MERWE</p>

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
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Route>
      </Routes>
      <footer className="footer">
        <hr />
        <p>All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
