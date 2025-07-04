import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/blog', label: 'Blog' },
  { to: '/publisher', label: 'Publisher Details' },
  { to: '/issn', label: 'ISSN Details' },
  { to: '/research', label: 'Research Articles' },
  { to: '/ethics', label: 'Ethics' },
  { to: '/plagiarism', label: 'Plagiarism Policy' },
  { to: '/editorial-board', label: 'Editorial Board' },
  { to: '/contact-us', label: 'Contact Info' },
];

const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <span className="font-bold text-lg tracking-wide">SCIENTIFIC JOURNAL</span>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 transition font-medium ${isActive ? 'text-blue-700 underline' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 hover:text-blue-700"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-700 transition font-medium ${isActive ? 'text-blue-700 underline' : ''}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default TopNavbar;
