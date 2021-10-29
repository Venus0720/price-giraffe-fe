import React from 'react';
import { Link } from 'react-router-dom';

import images from 'assets/images';

const navigation = [
  { name: 'Home', route: '/' },
  { name: 'Features', route: '/features' },
  { name: 'About Us', route: '/about' }
];

const Navbar = () => {
  return (
    <header className="bg-secondary sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 lg:grid flex lg:grid-cols-3 border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto"
                src={images.PriceGiraffeLogoText}
                alt=""
              />
            </a>
          </div>
          <div className="hidden ml-16 space-x-8 lg:block my-auto">
            {navigation.map((link) => (
              <Link to={link.route}>
                <a
                  key={link.name}
                  href={link.route}
                  className="text-base font-medium text-primary hover:text-pink-900"
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="ml-auto space-x-4 inline">
            <div className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
              Sign in
            </div>
            <div className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
              Sign up
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link to={link.route}>
              <div
                key={link.name}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
