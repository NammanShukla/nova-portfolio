import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function About() {
  return (
    <div className="flex flex-col md:flex-row flex-grow w-full">
      <Profile />
      <Resume />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a1d] text-[#e0e0e0] flex flex-col">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}
