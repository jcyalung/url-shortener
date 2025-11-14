import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import ShortenPage from './pages/ShortenPage';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/shorten">Shorten</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorten" element={<ShortenPage />} />
      </Routes>
    </>
  )
}

export default App;
