import './App.css';
import { Routes, Route, Link } from 'react-router';
import Home from './components/Home';
import MainLayout from './components/MainLayout';
import About from './components/About';

function App() {
  return (
    <>
      <nav>
        <p>this is the nav section</p>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <hr />
      </nav>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
