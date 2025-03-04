import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScrollSpy from '@/hooks/useScrollSpy';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'experience', 'skills', 'projects', 'contact'], 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 py-4 px-4 md:px-8 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-space font-bold">
          <span className="text-white">Ibrahim</span><span className="text-primary-500">.Sheikh</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`transition-colors duration-300 ${
                activeSection === link.href.substring(1) 
                  ? 'text-primary-500 font-medium' 
                  : 'text-gray-300 hover:text-primary-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-gray-300 hover:text-primary-400"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={['fas', 'bars']} className="text-xl" />
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden pt-4 pb-2 px-4 bg-gray-900/90 backdrop-blur-md transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`transition-colors duration-300 ${
                activeSection === link.href.substring(1) 
                  ? 'text-primary-500 font-medium' 
                  : 'text-gray-300 hover:text-primary-400'
              }`}
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
