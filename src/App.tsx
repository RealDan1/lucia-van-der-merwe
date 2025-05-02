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
        <h1 className="heading">Lucia Van Der Merwe</h1>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/newsletter">Newsletter</Link>
        </div>
      </nav>
      <hr />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
