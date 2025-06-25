import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/blog', label: 'Blog', desc: 'Read the latest articles and updates.' },
  { to: '/publisher', label: 'Publisher Details', desc: 'Learn about our publisher.' },
  { to: '/issn', label: 'ISSN Details', desc: 'View ISSN and journal information.' },
  { to: '/contact', label: 'Contact Us', desc: 'Get in touch with us.' },
  { to: '/research', label: 'Research Articles', desc: 'Explore featured research.' },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-2">Welcome to the Scientific Journal Management System</h1>
      <p className="text-lg text-blue-700 mb-8 text-center max-w-2xl">A modern platform for managing, publishing, and exploring academic journals and research articles. Navigate using the sections below:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-start hover:bg-blue-50 transition border border-blue-100 hover:border-blue-300">
            <span className="text-2xl font-semibold text-blue-800 mb-2">{link.label}</span>
            <span className="text-gray-600">{link.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage; 