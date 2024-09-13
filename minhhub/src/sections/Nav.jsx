import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  // State to toggle the menu
  const [isOpen, setIsOpen] = useState(false);

  // Menu items array
  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-ghostwhite py-3 text-sm text-font-color font-montserrat">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-steelblue">
          <Link to="/" className="no-underline">Minh</Link> {/* Link to Home page */}
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6 text-font-color"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex gap-6 list-none md:static absolute left-0 top-12 w-full md:w-auto md:bg-transparent bg-ghostwhite transition-all duration-300 ease-in-out`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="font-semibold hover:text-primary-color cursor9-pointer p-4 md:p-0">
              <Link to={item.path} className="no-underline">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
