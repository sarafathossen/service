import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-12">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-xl p-8 sm:p-10 lg:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Contact Us</h1>

        <p className="text-gray-300 mb-10 text-center leading-relaxed sm:text-lg">
          Have questions or need assistance? We are here to help! 
          Fill out the form below or reach out to us through the provided contact details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300">
              <span className="font-semibold text-blue-400">Address:</span> 123 Business Street, City, Country
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-blue-400">Phone:</span> +880 123 456 789
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-blue-400">Email:</span> contact@ourcompany.com
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-blue-400">Working Hours:</span> Mon - Fri, 9:00 AM - 6:00 PM
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-300 mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 sm:py-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 sm:py-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 sm:py-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-400 text-sm sm:text-base">
          We aim to respond within 24 hours. Thank you for reaching out!
        </p>
      </div>
    </div>
  );
}
