import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:anuwatchaiyakan@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
          {/* <a href="https://www.linkedin.com/in/anuwat-chaiyakan" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a> */}
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Anuwat Chaiyakan. All rights reserved. | Crafted with passion for game backend and AI innovation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
