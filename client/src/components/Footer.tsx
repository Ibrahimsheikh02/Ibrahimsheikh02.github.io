import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-8 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">&copy; {year} Ibrahim Sheikh. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Built with <FontAwesomeIcon icon={['fas', 'heart']} className="text-red-500" /> using React, Three.js and Particles.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
