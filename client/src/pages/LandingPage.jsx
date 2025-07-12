// Icons
import {
  BookOpen,
  Users,
  FileText,
  Phone,
  Search,
  ArrowRight,
  Zap,
  Globe,
  Shield,
  User
} from "lucide-react";

// React & Router
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Navigation Links
const navLinks = [
  {
    to: "/publisher",
    label: "Publisher Details",
    desc: "Learn about our publisher, editorial board, and publishing standards.",
    icon: Users,
  },
  {
    to: "/issn",
    label: "ISSN Details",
    desc: "View ISSN registration, journal metrics, and indexing information.",
    icon: FileText,
  },
  {
    to: "/research",
    label: "Research Articles",
    desc: "Explore our extensive collection of peer-reviewed research publications.",
    icon: Search,
  },
  {
    to: "/editions",
    label: "Journal Editions",
    desc: "Browse current and archived journal issues with complete article details and editorial information.",
    icon: BookOpen,
  },
  {
    to: "/editorial-board",
    label: "Editorial Board",
    desc: "Meet our distinguished editorial board members, library staff, and academic leadership team.",
    icon: Users,
  },
  {
    to: "/ethics",
    label: "Ethics",
    desc: "Read about our publication ethics and standards.",
    icon: Shield,
  },
  {
    to: "/plagiarism",
    label: "Plagiarism Policy",
    desc: "Understand our strict anti-plagiarism policy.",
    icon: FileText,
  },
  {
    to: "/contact-us",
    label: "Contact Info",
    desc: "Get in touch with our editorial team or technical support.",
    icon: Phone,
  },
];

// Feature Highlights
const features = [
  {
    icon: Zap,
    title: "Rigorous Review Process",
    desc: "Double-blind peer review ensuring the highest academic standards with transparent evaluation criteria",
  },
  {
    icon: Globe,
    title: "International Indexing",
    desc: "Published articles are indexed in leading academic databases for maximum scholarly visibility",
  },
  {
    icon: Shield,
    title: "Editorial Excellence",
    desc: "Managed by distinguished scholars and experts committed to advancing academic discourse",
  },
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
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="min-h-screen">
{/* --- Header Navigation --- */}
<header className="bg-bg-light border-b border-accent-light shadow-sm sticky top-0 z-50 transition-shadow duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      
      {/* Logo */}
      <div className="flex items-center space-x-3 hover:scale-[1.02] transition-transform duration-300">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-serif font-bold text-text tracking-wide">
            Journal Management
          </h1>
          <p className="text-xs text-subtext uppercase tracking-wide">
            Academic Publishing Platform
          </p>
        </div>
      </div>

      {/* Nav Buttons & Account Dropdown */}
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center" ref={dropdownRef}>
        <button
          onClick={() => navigate("/editions")}
          className="flex items-center space-x-2 px-4 py-2 text-text hover:text-primary border border-muted rounded bg-white hover:border-primary hover:bg-primary-light transition-all hover:scale-[1.03]"
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-sm">Journal Editions</span>
        </button>

        <button
          onClick={() => navigate("/editorial-board")}
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-white font-medium rounded hover:bg-primary-dark transition-all hover:scale-[1.03]"
        >
          <Users className="w-4 h-4" />
          <span className="text-sm">Editorial Board</span>
        </button>

        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="flex items-center space-x-2 px-4 py-2 text-text hover:text-primary border border-muted rounded bg-white hover:border-primary hover:bg-primary-light transition-all hover:scale-[1.03]"
        >
          <User className="w-4 h-4" />
          <span className="text-sm">Account</span>
        </button>

        {dropdownOpen && (
          <div className="mt-2 w-full sm:w-48 bg-white border border-accent-light rounded shadow-xl py-1 z-50 animate-fadeIn">
            <button
              onClick={() => {
                setDropdownOpen(false);
                navigate("/login");
              }}
              className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-primary-light transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => {
                setDropdownOpen(false);
                navigate("/signup");
              }}
              className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-primary-light transition-colors"
            >
              Create Account
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
</header>

{/* --- Hero Section --- */}
<section className="bg-white pt-24 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-light/10 to-accent-light/20 z-0" />
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center px-4 relative z-10">
    {/* Left Image Grid */}
    <div className="flex gap-5 mb-8 lg:mb-0">
      <div className="flex flex-col gap-5">
        <img
          src="https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?fm=jpg&q=60&w=3000"
          className="h-64 w-72 sm:h-80 sm:w-80 object-cover rounded shadow-lg hover:scale-105 transition-transform duration-500 parallax"
        />
        <img
          src="https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?fm=jpg&q=60&w=3000"
          className="h-64 w-72 sm:h-80 sm:w-80 object-cover rounded shadow-lg hover:scale-105 transition-transform duration-500 parallax"
        />
      </div>
      <div className="flex flex-col gap-5">
        <img
          src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=600&q=60"
          className="h-64 w-72 sm:h-80 sm:w-80 object-cover rounded shadow-lg hover:scale-105 transition-transform duration-500 parallax"
        />
        <img
          src="https://images.unsplash.com/photo-1513542992587-cd39ba97057c?w=600&q=60"
          className="h-64 w-72 sm:h-80 sm:w-80 object-cover rounded shadow-lg hover:scale-105 transition-transform duration-500 parallax"
        />
      </div>
    </div>

    {/* Right Text Content */}
    <div className="max-w-xl text-center lg:text-left animate-fadeInUp">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 bg-primary-light text-primary text-sm font-medium rounded-full mb-6">
          Established Academic Publishing
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text leading-tight mb-4">
          Law, Diplomacy, Tech & <span className="text-primary">Policy Review</span>
        </h1>
        <p className="text-base sm:text-lg text-text leading-relaxed mb-6">
          A premier scholarly journal dedicated to advancing
          interdisciplinary research at the intersection of law,
          diplomacy, technology, and public policy through rigorous
          peer-reviewed publications.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Link
          to="/research"
          className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded hover:bg-primary-dark transition-colors hover:shadow-xl transform hover:scale-105"
        >
          Browse Articles
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
        <Link
          to="/research"
          className="inline-flex items-center px-8 py-3 border border-primary text-primary font-medium rounded hover:border-primary-dark hover:bg-primary-light transition-colors hover:shadow-lg transform hover:scale-105"
        >
          Research Articles
        </Link>
        <Link
          to="/publisher"
          className="inline-flex items-center px-8 py-3 border border-primary text-primary font-medium rounded hover:border-primary-dark hover:bg-primary-light transition-colors hover:shadow-lg transform hover:scale-105"
        >
          About the Journal
        </Link>
      </div>
    </div>
  </div>
</section>

{/* --- Journal Resources Section --- */}
<section className="py-20 bg-primary-light/25 px-4">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16 animate-fadeInUp">
      <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-6">
        Journal Resources
      </h2>
      <p className="text-lg text-text max-w-2xl mx-auto">
        Access comprehensive information about our journal, submission
        guidelines, and scholarly resources
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {navLinks.map((link, index) => (
        <Link
          key={link.to}
          to={link.to}
          className="group backdrop-blur-md bg-white/80 border border-gray-200 shadow-md rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-500 text-left w-full relative overflow-hidden transform hover:-translate-y-1 hover:scale-[1.02] animate-fadeIn"
        >
          <div className="mb-6 relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg mb-4 transition-colors group-hover:bg-primary">
              <link.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-primary-dark mb-3">
              {link.label}
            </h3>
            <p className="text-text leading-relaxed mb-4">
              {link.desc}
            </p>
            <div className="flex items-center text-sm font-medium text-primary group-hover:text-accent">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
          <div className="absolute right-3 bottom-3 text-primary-light opacity-10 group-hover:opacity-20 transition-opacity duration-300 text-6xl">
            <link.icon />
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

<style jsx>{`
  .parallax {
    will-change: transform;
    transition: transform 0.4s ease-out;
  }
  .parallax:hover {
    transform: translateY(-10px);
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeInUp {
    animation: fadeInUp 1s ease forwards;
  }
`}</style>

{/* --- Journal Statistics Section --- */}
<section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-accent text-white px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
    {(() => {
      const stats = [
        { end: 2500, suffix: "+", label: "Published Articles" },
        { end: 180, suffix: "+", label: "Editorial Board Members" },
        { end: 75, suffix: "+", label: "Countries Represented" },
        { end: 15, suffix: "", label: "Years Publishing" },
      ];
      const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
      return stats.map(({ end, suffix, label }, index) => (
        <div
          key={index}
          ref={index === 0 ? ref : null} // trigger animation once from first element
          className="transform transition-transform duration-300 hover:scale-105"
        >
          <div className="text-4xl font-serif font-bold mb-2 animate-fadeInUp">
            {inView ? <CountUp end={end} duration={2} suffix={suffix} /> : "0"}
          </div>
          <div className="text-muted text-sm uppercase tracking-wide">
            {label}
          </div>
        </div>
      ));
    })()}
  </div>
</section>

{/* --- Editorial Standards Section --- */}
<section className="py-20 bg-gradient-to-t from-primary-light via-white to-primary-light px-4">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark mb-6 animate-fadeInDown">
      Editorial Excellence
    </h2>
    <p className="text-lg text-text max-w-3xl mx-auto mb-16 animate-fadeIn">
      Our commitment to scholarly rigor and academic integrity defines
      every aspect of our publishing process
    </p>
    <div className="grid md:grid-cols-3 gap-12">
      {features.map((feature, index) => (
        <div
          key={index}
          className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group hover:-translate-y-1 hover:scale-[1.02] transform"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-dark rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
            <feature.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-primary-dark mb-4 group-hover:text-accent transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-primary leading-relaxed text-sm">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* --- Call to Action Section --- */}
<section className="py-20 bg-gradient-to-tr from-white via-primary-light/10 to-accent-light/10 text-center px-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-primary-light/10 to-accent-light/20 animate-pulse z-0" />
  <div className="relative z-10 max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary-dark mb-4 animate-fadeInUp">
      Submit Your Research
    </h2>
    <p className="text-base sm:text-lg text-text mb-6 max-w-2xl mx-auto animate-fadeIn">
      Join our community of distinguished scholars and contribute to the
      advancement of interdisciplinary research
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/contact-us"
        className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.05] transition duration-300 ease-in-out group"
      >
        <span className="group-hover:underline">Submission Guidelines</span>
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  </div>
</section>

      {/* --- Footer Section --- */}
<footer className="bg-text border-t border-accent-light py-12 text-white px-4 relative overflow-hidden">
  {/* Background Animation */}
  <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/10 to-accent-light/10 animate-pulse z-0" />

  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
    {/* Logo and Description */}
    <div className="group">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-bg-light rounded-full flex items-center justify-center shadow-lg group-hover:rotate-6 transform transition duration-500">
          <BookOpen className="w-5 h-5 text-primary-dark transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-bg-light text-lg tracking-wide group-hover:text-accent transition-colors duration-300">
            LDTPPR
          </h3>
          <p className="text-xs text-white opacity-80">Law, Diplomacy, Tech & Public Policy Review</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-white/90 group-hover:opacity-100 transition-opacity duration-300">
        A peer-reviewed academic journal committed to rigorous research and interdisciplinary dialogue across global issues.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="font-serif font-semibold text-bg-light mb-4 text-lg underline decoration-accent decoration-2 underline-offset-4">
        Quick Links
      </h4>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {[
          ["Blog", "/blog"],
          ["Research Archive", "/research"],
          ["Publisher Info", "/publisher"],
          ["ISSN Details", "/issn"],
          ["Contact Us", "/contact-us"],
        ].map(([label, path]) => (
          <Link
            key={path}
            to={path}
            className="text-white hover:text-accent-light transition duration-300 relative group"
          >
            <span className="group-hover:underline underline-offset-2 decoration-accent decoration-2">{label}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent-light group-hover:w-full transition-all duration-500"></span>
          </Link>
        ))}
      </div>
    </div>
  </div>

  {/* Footer Bottom Text */}
  <div className="relative z-10 text-center border-t border-white/20 pt-6 mt-6 text-sm text-bg-light tracking-wide">
    &copy; {new Date().getFullYear()} Law, Diplomacy, Technology & Public Policy Review. All rights reserved.
  </div>
</footer>
</div>
);
};
export default LandingPage;
