"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, useParams } from "next/navigation";

export default function ServiceDetailsPage() {
  const params = useParams(); // Next.js 16 useParams
  const id = params?.id;
  const { user, loading } = useAuth();
  const router = useRouter();

  const [service, setService] = useState(null);
  const [fetching, setFetching] = useState(true);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);

  // Fetch service data
  useEffect(() => {
    if (!id) return;
    setFetching(true);

    fetch(`https://workly-server-two.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data.result))
      .catch((err) => console.error(err))
      .finally(() => setFetching(false));
  }, [id]);

  if (!user) return null; // wait for redirect
  if (fetching)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (!service)
    return <p className="text-center mt-10 text-red-500">Service not found</p>;

  const { service_name, category, price, service_rating, image_url, description } =
    service;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img
          src={image_url || "https://i.ibb.co/RTM46szK/Al-Hasan.jpg"}
          alt={service_name}
          className="w-full h-64 sm:h-80 object-cover"
        />

        <div className="p-6 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            {service_name}
          </h1>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-gray-700 dark:text-gray-300">
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Rating:</span>{" "}
              {service_rating?.rating || "No Rating"}
            </p>
          </div>

          <p className="text-lg sm:text-xl font-semibold text-green-600 dark:text-green-400">
            Price: {price || "N/A"} Taka
          </p>

          <div className="text-gray-800 dark:text-gray-200">
            <h2 className="text-lg font-semibold mb-1">Description:</h2>
            <p className="leading-relaxed">{description || "No description."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
