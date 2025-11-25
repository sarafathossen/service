"use client";
import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";

export default function AddServicePage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://workly-server-two.vercel.app/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        alert("Service added successfully!");
        event.target.reset();
      } else {
        alert("Failed to add service");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors p-4">
      <div className="w-full max-w-4xl p-6 sm:p-8 lg:p-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
          Add New Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="service_name"
              placeholder="Service Name"
              className="p-3 sm:p-4 border rounded-lg w-full bg-gray-100 dark:bg-[#1e2535] text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="p-3 sm:p-4 border rounded-lg w-full bg-gray-100 dark:bg-[#1e2535] text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="p-3 sm:p-4 border rounded-lg w-full bg-gray-100 dark:bg-[#1e2535] text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="text"
              name="image_url"
              placeholder="Image URL"
              className="p-3 sm:p-4 border rounded-lg w-full bg-gray-100 dark:bg-[#1e2535] text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <input
            type="text"
            name="provider_name"
            value={user?.displayName || ""}
            readOnly
            className="w-full p-3 sm:p-4 border rounded-lg bg-gray-100 dark:bg-[#1e2535] text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600"
          />
          <input
            type="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="w-full p-3 sm:p-4 border rounded-lg bg-gray-100 dark:bg-[#1e2535] text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600"
          />

          <textarea
            name="description"
            placeholder="Write short description..."
            rows={4}
            className="w-full p-3 sm:p-4 border rounded-lg bg-gray-100 dark:bg-[#1e2535] text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>

          <input
            type="number"
            step="0.1"
            min="1"
            max="5"
            name="rating"
            placeholder="Rating (1-5)"
            className="w-full p-3 sm:p-4 border rounded-lg bg-gray-100 dark:bg-[#1e2535] text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 sm:py-4 font-semibold rounded-lg transition-all duration-300 ${
              loading
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            } text-white`}
          >
            {loading ? "Adding..." : "Add Service"}
          </button>
        </form>
      </div>
    </div>
  );
}
