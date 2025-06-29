import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#2c2c2e] p-4 border-t border-[#3a3a3c] flex justify-center space-x-4 fixed bottom-0 z-50">
      {['About', 'Projects', 'Blog'].map((label) => (
        <Link
          key={label}
          to={label === 'About' ? '/' : `/${label.toLowerCase()}`}
          className="bg-[#3a3a3c] text-[#FFD600] font-semibold px-4 py-2 rounded hover:bg-[#4a4a4c] transition duration-200 text-sm tracking-wide"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
