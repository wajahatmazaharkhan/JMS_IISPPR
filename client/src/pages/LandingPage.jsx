import { BookOpen, Users, FileText, Phone, Search, ArrowRight, Zap, Globe, Shield, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const navLinks = [
  { 
    to: '/blog', 
    label: 'Blog', 
    desc: 'Read the latest articles and updates from our editorial team and featured researchers.',
    icon: BookOpen
  },
  { 
    to: '/publisher', 
    label: 'Publisher Details', 
    desc: 'Learn about our publisher, editorial board, and publishing standards.',
    icon: Users
  },
  { 
    to: '/issn', 
    label: 'ISSN Details', 
    desc: 'View ISSN registration, journal metrics, and indexing information.',
    icon: FileText
  },
  { 
    to: '/contact-us', 
    label: 'Contact Us', 
    desc: 'Get in touch with our editorial team or technical support.',
    icon: Phone
  },
  { 
    to: '/research', 
    label: 'Research Articles', 
    desc: 'Explore our extensive collection of peer-reviewed research publications.',
    icon: Search
  },
];

const features = [
  {
    icon: Zap,
    title: 'Rigorous Review Process',
    desc: 'Double-blind peer review ensuring the highest academic standards with transparent evaluation criteria'
  },
  {
    icon: Globe,
    title: 'International Indexing',
    desc: 'Published articles are indexed in leading academic databases for maximum scholarly visibility'
  },
  {
    icon: Shield,
    title: 'Editorial Excellence',
    desc: 'Managed by distinguished scholars and experts committed to advancing academic discourse'
  }
];

const LandingPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-slate-800">Journal Management</h1>
                <p className="text-xs text-slate-600 uppercase tracking-wide">Academic Publishing Platform</p>
              </div>
            </div>
            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                aria-label="Account Menu"
              >
                <User className="w-4 h-4 text-slate-700" />
                <span className="text-sm text-slate-700">Account</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-1">
                  <button
                    onClick={() => { setDropdownOpen(false); navigate('/login'); }}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-gray-50"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { setDropdownOpen(false); navigate('/signup'); }}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-gray-50"
                  >
                    Create Account
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-6">
                Established Academic Publishing
              </span>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                Law, Diplomacy, Technology &<br />
                <span className="text-slate-700">Public Policy Review</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
                A premier scholarly journal dedicated to advancing interdisciplinary research at the intersection of law, diplomacy, technology, and public policy through rigorous peer-reviewed publications.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/research"
                className="inline-flex items-center px-8 py-3 bg-slate-800 text-white font-medium rounded hover:bg-slate-900 transition-colors"
              >
                Browse Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to="/publisher"
                className="inline-flex items-center px-8 py-3 border border-slate-300 text-slate-700 font-medium rounded hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                About the Journal
              </Link>
            </div>
            {/* Journal Image */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <div className="bg-gray-50 rounded h-80 flex items-center justify-center">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am91cm5hbHxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Academic journal and research materials" 
                    className="w-full h-full object-cover rounded opacity-90" 
                  />
                </div>
                <p className="text-sm text-slate-500 mt-4 text-center italic">
                  Supporting scholarly excellence through rigorous academic standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Standards Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
              Editorial Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our commitment to scholarly rigor and academic integrity defines every aspect of our publishing process
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
              Journal Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Access comprehensive information about our journal, submission guidelines, and scholarly resources
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navLinks.map((link, index) => (
              <Link 
                key={link.to} 
                to={link.to}
                className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300 text-left w-full"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4 group-hover:bg-slate-200 transition-colors">
                    <link.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">
                    {link.label}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {link.desc}
                  </p>
                  <div className="flex items-center text-sm font-medium text-slate-800 group-hover:text-slate-900">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-serif font-bold mb-2">2,500+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wide">Published Articles</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-serif font-bold mb-2">180+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wide">Editorial Board Members</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-serif font-bold mb-2">75+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wide">Countries Represented</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-serif font-bold mb-2">15</div>
              <div className="text-slate-300 text-sm uppercase tracking-wide">Years Publishing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
            Submit Your Research
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join our community of distinguished scholars and contribute to the advancement of interdisciplinary research
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact-us"
              className="inline-flex items-center px-8 py-3 bg-slate-800 text-white font-medium rounded hover:bg-slate-900 transition-colors"
            >
              Submission Guidelines
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              to="/blog"
              className="inline-flex items-center px-8 py-3 border border-slate-300 text-slate-700 font-medium rounded hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Editorial Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-800">LDTPPR</h3>
                  <p className="text-xs text-slate-600">Law, Diplomacy, Tech & Public Policy Review</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                A scholarly journal committed to publishing high-quality research at the intersection of law, diplomacy, technology, and public policy.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-slate-900 mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/blog" className="text-slate-600 hover:text-slate-900 transition-colors text-left">Editorial Blog</Link>
                <Link to="/research" className="text-slate-600 hover:text-slate-900 transition-colors text-left">Research Archive</Link>
                <Link to="/publisher" className="text-slate-600 hover:text-slate-900 transition-colors text-left">Publisher Info</Link>
                <Link to="/editorial-board" className="text-slate-600 hover:text-slate-900 transition-colors text-left">Editorial Board</Link>
                <Link to="/ethics" className="text-slate-600 hover:text-slate-900 transition-colors text-left">Publication Ethics</Link>
                <Link to="/contact-us" className="text-slate-600 hover:text-slate-900 transition-colors text-left">Contact Editorial</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-slate-600">
              &copy; {new Date().getFullYear()} Law, Diplomacy, Technology & Public Policy Review (LDTPPR). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 