import React from 'react';

const SectionComponent = ({ title, image, content, quote }) => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center py-16 px-4 text-center text-4xl text-black font-inter">
      {/* Container with consistent max-width */}
      <div className="container mx-auto flex flex-col gap-8">
        
        {/* Section Title */}
        <div className="w-full flex justify-center">
          <b className="text-5xl font-bold">{title}</b>
        </div>
        
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 text-left text-2xl text-midnightblue">
          
          {/* Left Column with Image */}
          <div className="flex flex-col items-start justify-start gap-8 w-full lg:w-1/3">
            <img className="w-full h-[560px] object-cover rounded-lg shadow-lg" alt={title} src={image} />
          </div>

          {/* Right Column with Text Content */}
          <div className="flex flex-col gap-6 w-full lg:w-2/3 text-left text-lg text-black">
            {content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            {/* Quote Section */}
            <div className="w-full flex justify-center">
              <i className="text-xl font-bold text-center">{quote}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
