import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const navLinks = [
  { to: '/publisher', label: 'Publisher Details' },
  { to: '/issn', label: 'ISSN Details' },
  { to: '/research', label: 'Research Articles' },
  { to: '/editions', label: 'Journal Editions' },
  { to: '/ethics', label: 'Ethics' },
  { to: '/plagiarism', label: 'Plagiarism Policy' },
  { to: '/contact-us', label: 'Contact Info' },
];

const editorialBoardNavLinks = [
  { to: '/issn', label: 'ISSN Details' },
  { to: '/research', label: 'Research Articles' },
  { to: '/editions', label: 'Journal Editions' },
  { to: '/ethics', label: 'Ethics' },
  { to: '/plagiarism', label: 'Plagiarism Policy' },
  { to: '/contact-us', label: 'Contact Info' },
];

const accountLinks = [
  { to: '/login', label: 'Login' },
  { to: '/signup', label: 'Sign Up' },
];

const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isEditorialBoardPage = location.pathname === '/editorial-board';
  
  // Use different nav links based on the current page
  const currentNavLinks = isEditorialBoardPage ? editorialBoardNavLinks : navLinks;

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
     <NavLink to="/" className="font-bold text-lg tracking-wide text-black hover:text-blue-700 transition">
     SCIENTIFIC JOURNAL </NavLink>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        {currentNavLinks.map((link) => (
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
        
        {/* Editorial Board Button - only show if not on editorial board page */}
        {!isEditorialBoardPage && (
          <div className="flex items-center ml-6 pl-6 border-l border-gray-300">
            <NavLink
              to="/editorial-board"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium transition ${
                  isActive 
                    ? 'bg-rose-900 text-white shadow-md' 
                    : 'bg-rose-900 text-white hover:bg-blue-700 hover:shadow-md'
                }`
              }
            >
              Editorial Board
            </NavLink>
          </div>
        )}
        
        {/* Account Links */}
        <div className="flex items-center space-x-4 ml-4">
          {accountLinks.map((link) => (
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
        </div>
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
          {currentNavLinks.map((link) => (
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
          
          {/* Mobile Editorial Board Button - only show if not on editorial board page */}
          {!isEditorialBoardPage && (
            <div className="w-full pt-4 border-t border-gray-300">
              <NavLink
                to="/editorial-board"
                className={({ isActive }) =>
                  `block w-full text-center px-4 py-2 rounded-md font-medium transition ${
                    isActive 
                      ? 'bg-blue-700 text-white shadow-md' 
                      : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Editorial Board
              </NavLink>
            </div>
          )}
          
          {/* Mobile Account Links */}
          <div className="w-full pt-4 border-t border-gray-300">
            <div className="flex items-center space-x-2 mb-2">
              <User className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Account</span>
            </div>
            {accountLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block text-gray-700 hover:text-blue-700 transition font-medium ${isActive ? 'text-blue-700 underline' : ''}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNavbar;
