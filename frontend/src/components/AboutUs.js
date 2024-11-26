import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">About</h1>

        {/* Subtitle */}
        <h2 className="text-3xl font-bold text-gray-700 mb-8">Our Mission</h2>

        {/* Paragraph Text */}
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Swap SC is a premier online platform exclusively designed for USC
          students to engage in trading, selling, or renting fashionable,
          pre-loved items. Our user-friendly interface and tailored
          functionalities cater specifically to the dynamic USC student
          community.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          We aim to provide a seamless experience for students to explore
          trendy fashion options and connect with their peers, enhancing their
          style choices and promoting sustainability in fashion.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
