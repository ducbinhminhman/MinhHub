import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  // State to toggle the menu
  const [isOpen, setIsOpen] = useState(false);

  // Menu items array
  const menuItems = [
    { name: 'About', path: '/about', external: false },
    { name: 'Portfolio', path: 'https://github.com/ducbinhminhman', external: true },
    { name: 'Blog', path: 'https://medium.com/@bnhminh_38309', external: true },
    { name: 'Contact', path: 'https://www.linkedin.com/in/binhminhman/', external: true },
  ];

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-ghostwhite"> {/* Full-width background wrapper */}
      <nav className="h-[5vh] text-base text-font-color font-montserrat">
        <div className="container mx-auto w-[90%] flex items-center justify-between relative h-full">
          {/* Logo */}
          <div className="text-2xl font-bold text-font-color">
            <Link to="/" className="no-underline text-font-color"> {/* Link to Home page */}
              Minh
            </Link>
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
            } md:flex gap-6 list-none md:static absolute left-0 top-full w-full md:w-auto bg-ghostwhite md:bg-transparent transition-all duration-300 ease-in-out z-10`}
          >
            {menuItems.map((item, index) => (
              <li key={index} className="font-semibold hover:text-primary-color cursor-pointer p-4 md:p-0">
                {item.external ? (
                  // External link for Portfolio, Blog, and Contact
                  <a 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="no-underline text-font-color"
                    onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                  >
                    {item.name}
                  </a>
                ) : (
                  // Internal navigation for About and Services
                  <Link 
                    to={item.path} 
                    className="no-underline text-font-color"
                    onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
