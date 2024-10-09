// src/components/DeveloperPage.js
import React from 'react';

const DevelopPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 max-w-4xl">
        {/* Developer Image */}
        <div className="flex justify-center mb-8">
          <img
            className="w-40 h-40 rounded-full object-cover shadow-md"
            src="https://via.placeholder.com/150" // Add your image URL here
            alt="Developer"
          />
        </div>

        {/* Developer Name */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Durgesh Kumar
        </h1>

        {/* About Developer */}
        <p className="text-lg text-center text-gray-600 mb-6">
          I am a passionate developer with experience in building responsive websites using React.js and Tailwind CSS. I enjoy working on innovative projects and bringing ideas to life through clean, modern web design.
        </p>

        {/* Developer Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Address:</h3>
            <p>123 Main Street, City, Country</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Email:</h3>
            <p>durgesh@example.com</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Phone:</h3>
            <p>+123-456-7890</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">LinkedIn:</h3>
            <a href="https://linkedin.com/in/durgesh" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/durgesh
            </a>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="mt-8 text-gray-700">
          <h2 className="text-2xl font-bold mb-4">Qualifications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Bachelor's Degree in Computer Science, XYZ University (2024)</li>
            <li>Full-Stack Web Development Certification - ABC Institute (2023)</li>
            <li>React.js and Tailwind CSS Advanced Certification - Online Course (2022)</li>
            <li>Proficiency in JavaScript, HTML, CSS, and SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevelopPage;
