import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar.jsx';
import About from './pages/About.jsx';
import Work from './pages/Work.jsx';

export default function App() {
  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <Topbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow mono">Error 404</p>
      <h1>This page wandered off.</h1>
      <a className="pill pill--cta" href="/">
        Back to home
      </a>
    </main>
  );
}
