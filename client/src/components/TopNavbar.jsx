import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/blog', label: 'Blog' },
  { to: '/publisher', label: 'Publisher Details' },
  { to: '/issn', label: 'ISSN Details' },
  // { to: '/contact-us', label: 'Contact Us' },
  { to: '/research', label: 'Research Articles' },
  { to: '/ethics', label: 'Ethics' },
  { to: '/plagiarism', label: 'Plagiarism Policy' },
  { to: '/editorial-board', label: 'Editorial Board' },
  { to: '/contact-us', label: 'Contact Info' },
];

const TopNavbar = () => {
  return (
    <header className="h-16 bg-white shadow flex items-center px-6 justify-between">
      <span className="font-bold text-lg tracking-wide">SCIENTIFIC JOURNAL</span>
      <nav className="flex items-center space-x-6">
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
    </header>
  );
};

export default TopNavbar; 