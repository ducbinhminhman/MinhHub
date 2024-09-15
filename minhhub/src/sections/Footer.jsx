import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
  return (
    <footer className="w-full bg-darkslategray text-white font-roboto py-12">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Upper Section */}
        <nav className="w-full flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-gray-500 pb-8 mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="text-3xl font-black uppercase">Minh</div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
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
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <span className="font-semibold">Follow me:</span>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/manducbinh.minh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline hover:text-primary-color"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/min_bin_1112/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline hover:text-primary-color"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/binhminhman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline hover:text-primary-color"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </nav>

        {/* Lower Section */}
        <div className="w-full flex flex-col gap-2 md:flex-row md:justify-between items-center text-sm opacity-90 text-center md:text-left">
          <div>Developed by Minh</div>
          <div>Copyright © 2024 Minh. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
