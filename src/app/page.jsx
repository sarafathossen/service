import React from "react";
import Link from "next/link";
import ServiceCard from "@/Component/ServiceCard";

export default async function HomePage() {
  // সার্ভিস লিস্ট লোড
  const res = await fetch(`https://workly-server-two.vercel.app/services`, {
    cache: "no-store",
  });

  const data = await res.json();
  const service = data;

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gray-900">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Welcome to Service MyApp
        </h1>
        <p className="text-gray-300 mb-8 max-w-xs sm:max-w-md md:max-w-xl">
          Discover amazing services, connect with professionals, and manage your tasks easily.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/register"
            className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
          >
            Get Started
          </Link>

          <Link
            href="/services"
            className="px-6 py-3 border border-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition text-center"
          >
            Browse Services
          </Link>
        </div>
      </section>

      {/* Services Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 mt-10">
        {data.slice(0, 6).map(service => (
          <ServiceCard
            key={service._id}
            service={service}
          />
        ))}
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-gray-900 mt-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-2">Fast & Reliable</h2>
          <p className="text-gray-300">
            Access services quickly and rely on top-rated professionals.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-2">Secure & Safe</h2>
          <p className="text-gray-300">
            Your data is protected with industry-standard security.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-2">24/7 Support</h2>
          <p className="text-gray-300">
            Our team is here to help you anytime, anywhere.
          </p>
        </div>
      </section>

    </div>
  );
}
