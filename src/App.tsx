import Home from './components/Home';
import MainLayout from './components/MainLayout';
import './App.css';
import { Routes, Route, Link } from 'react-router';
function App() {
  return (
    <>
      <nav>
        <p>this is the nav section</p>
        <div className="links">
          <Link to="/">Home</Link>
        </div>
        <hr />
      </nav>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={Home} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
