import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-12">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          About Us
        </h1>

        <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
          Welcome to <span className="font-semibold text-blue-400">Our Company</span>! 
          We are committed to delivering the best services to our customers. 
          Our team of professionals works tirelessly to ensure quality, reliability, and innovation in every project we undertake.
        </p>

        <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
          Our mission is to provide value and excellence, helping businesses and individuals achieve their goals efficiently. 
          We focus on building long-term relationships with our clients based on trust and satisfaction.
        </p>

        <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
          With years of experience in the industry, we have honed our expertise in delivering customized solutions that meet diverse needs. 
          Your success is our priority, and we are dedicated to supporting you at every step.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
          <li>Customer Satisfaction</li>
          <li>Integrity and Transparency</li>
          <li>Innovation and Creativity</li>
          <li>Teamwork and Collaboration</li>
          <li>Continuous Learning and Improvement</li>
        </ul>

        <p className="mt-6 text-center text-gray-400 text-sm sm:text-base">
          Thank you for visiting our website. We look forward to serving you!
        </p>
      </div>
    </div>
  );
}
