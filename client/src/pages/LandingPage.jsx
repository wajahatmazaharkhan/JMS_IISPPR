import { BookOpen, Users, FileText, Phone, Search, ArrowRight, Zap, Globe, Shield, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const navLinks = [
  { 
    to: '/blog', 
    label: 'Blog', 
    desc: 'Read the latest articles and updates from our editorial team and featured researchers.',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    to: '/publisher', 
    label: 'Publisher Details', 
    desc: 'Learn about our publisher, editorial board, and publishing standards.',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    to: '/issn', 
    label: 'ISSN Details', 
    desc: 'View ISSN registration, journal metrics, and indexing information.',
    icon: FileText,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    to: '/contact', 
    label: 'Contact Us', 
    desc: 'Get in touch with our editorial team or technical support.',
    icon: Phone,
    color: 'from-orange-500 to-red-500'
  },
  { 
    to: '/research', 
    label: 'Research Articles', 
    desc: 'Explore our extensive collection of peer-reviewed research publications.',
    icon: Search,
    color: 'from-indigo-500 to-blue-500'
  },
];

const features = [
  {
    icon: Zap,
    title: 'Fast Publishing',
    desc: 'Streamlined peer-review process with average turnaround of 30 days'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Indexed in major databases with worldwide accessibility'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    desc: 'Rigorous peer-review by leading experts in each field'
  }
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
      {/* Profile Icon Top Right with Dropdown */}
      <div className="fixed top-6 right-6 z-50" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((v) => !v)}
          className="bg-white border border-gray-200 shadow-md rounded-full p-3 hover:bg-blue-50 transition"
          aria-label="Login or Signup"
        >
          <User className="w-6 h-6 text-blue-700" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 flex flex-col">
            <button
              onClick={() => { setDropdownOpen(false); navigate('/login'); }}
              className="px-4 py-2 text-left hover:bg-blue-50 text-blue-700 font-medium transition"
            >
              Login
            </button>
            <button
              onClick={() => { setDropdownOpen(false); navigate('/signup'); }}
              className="px-4 py-2 text-left hover:bg-indigo-50 text-indigo-700 font-medium transition"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Next-Generation Publishing Platform
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Journal
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Management</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Empowering researchers worldwide with a cutting-edge platform for publishing, discovering, and managing academic excellence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/research" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Research
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/publisher" 
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am91cm5hbHxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Research illustration or team photo" 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-90" 
                  />
                  <div className="relative z-10 text-center text-white bg-black/40 rounded-lg p-4 flex flex-col items-center">
                    <BookOpen className="w-16 h-16 mx-auto mb-2" />
                    <p className="font-medium">Research illustration or team photo</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for the modern research community with advanced features and seamless user experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Cards Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Explore Our Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Navigate through our comprehensive suite of tools and resources designed for researchers, publishers, and academic institutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navLinks.map((link, index) => (
              <Link 
                key={link.to} 
                to={link.to} 
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {link.label}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-500 transition-colors">
                    {link.desc}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                    Explore
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Published Articles</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Expert Reviewers</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries Reached</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Author Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Publish Your Research?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of researchers who trust our platform for their publishing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact-us" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/blog" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-200 py-8 mt-auto border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-sm">
            &copy; {new Date().getFullYear()} Law, Diplomacy, Tech & Public Policy Review (LDTPPR). All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end text-xs">
            <Link to="/blog" className="hover:text-indigo-400 transition">Blog</Link>
            <Link to="/research" className="hover:text-indigo-400 transition">Research</Link>
            <Link to="/publisher" className="hover:text-indigo-400 transition">Publisher</Link>
            <Link to="/editorial-board" className="hover:text-indigo-400 transition">Editorial Board</Link>
            <Link to="/ethics" className="hover:text-indigo-400 transition">Ethics</Link>
            <Link to="/plagiarism" className="hover:text-indigo-400 transition">Plagiarism</Link>
            <Link to="/contact-us" className="hover:text-indigo-400 transition">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 