import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterSection: FunctionComponent = () => {
  return (
    <footer className="w-full bg-darkslategray text-white font-roboto py-12">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Upper Section */}
        <nav className="w-full flex flex-col md:flex-row items-center justify-between border-b border-gray-500 pb-8 mb-8">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-black uppercase">Minh</div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8">
            <a href="#" className="capitalize text-white no-underline hover:text-primary-color">
              Contact
            </a>
            <a href="#" className="capitalize text-white no-underline hover:text-primary-color">
              Terms & Conditions
            </a>
            <a href="#" className="capitalize text-white no-underline hover:text-primary-color">
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <span className="font-semibold">Follow me:</span>
            <div className="flex gap-4">
              <a href="#" className="text-white no-underline hover:text-primary-color">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" className="text-white no-underline hover:text-primary-color">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-white no-underline hover:text-primary-color">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-white no-underline hover:text-primary-color">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </nav>

        {/* Lower Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
          <div>Developed by Minh</div>
          <div>Copyright © 2024 Minh. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
