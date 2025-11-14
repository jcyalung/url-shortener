import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShortenPage from './pages/ShortenPage';
import URLPage from './pages/URLPage';
import AliasRedirect from './pages/AliasRedirect';
function App() {
  /* you do not need to edit this */
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/shorten">Shorten</Link> | <Link to="/urls">All URLs</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shorten" element={<ShortenPage />} />
        <Route path="/urls" element={<URLPage />} />
        <Route path="/:alias" element={<AliasRedirect />} />
      </Routes>
    </>
  )
}

export default App;
