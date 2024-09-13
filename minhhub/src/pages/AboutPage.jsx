import React, { useState } from 'react';
import SectionComponent from '../components/SectionComponent';
import aboutData from '../constants/aboutData';

const About = () => {
  // Track which section is currently open
  const [openSection, setOpenSection] = useState(null);

  // Toggle the open section when an image is clicked
  const toggleSection = (index) => {
    if (openSection === index) {
      setOpenSection(null); // Close the section if it's already open
    } else {
      setOpenSection(index); // Open the clicked section
    }
  };

  return (
    <div className="w-full relative bg-gray flex flex-col items-center justify-start text-center text-black font-inter pt-16">
      
      {/* Image Grid or Section Content */}
      {openSection === null ? (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.map((section, index) => (
            <div key={index} className="relative w-full mb-4">
              {/* Clickable Image */}
              <div
                className="cursor-pointer relative group"
                onClick={() => toggleSection(index)}
              >
                {/* Image */}
                <img 
                  className={`w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105`} 
                  src={section.image} 
                  alt={section.title} 
                />
                
                {/* Title Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold transition-all duration-500 ease-in-out`}
                >
                  {section.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full relative"> {/* Relative positioning added here */}
          {/* Display only the clicked section */}
          <SectionComponent
            title={aboutData[openSection].title}
            image={aboutData[openSection].image}
            content={aboutData[openSection].content}
            quote={aboutData[openSection].quote}
          />

          {/* Back Button positioned at the bottom-right of the content container */}
          <button
            onClick={() => setOpenSection(null)} // Go back to the gallery
            className="absolute bottom-0 right-0 mb-4 mr-4 py-2 px-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Back to Gallery
          </button>
        </div>
      )}
      
      {/* Footer */}
      {/* You can add your footer component here */}
    </div>
  );
};

export default About;
