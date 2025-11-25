"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useAuth } from "@/context/AuthContext";

export default function ManageServicePage() {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load All Services then Filter by User
  useEffect(() => {
    if (!user?.email) return;

    const loadData = async () => {
      try {
        const res = await fetch("https://workly-server-two.vercel.app/services");
        const data = await res.json();
        const arr = Array.isArray(data?.result) ? data.result : data;
        const myData = arr.filter((item) => item.email === user.email);
        setServices(myData);
      } catch (error) {
        console.error("Failed to load services:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user]);

  // Delete Service
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            `https://workly-server-two.vercel.app/services/${id}`,
            { method: "DELETE" }
          );
          const data = await res.json();

          if (data.deletedCount > 0 || data.success) {
            Swal.fire("Deleted!", "Service deleted successfully.", "success");
            setServices((prev) => prev.filter((item) => item._id !== id));
          }
        } catch (error) {
          console.error(error);
          Swal.fire("Error!", "Something went wrong!", "error");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-500">
        Manage My Services
      </h1>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : services.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <thead className="bg-blue-100 dark:bg-blue-700/40">
              <tr>
                <th className="px-4 py-2 text-left">Service Name</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
              {services.map((service, index) => (
                <tr
                  key={service._id}
                  className={`${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800/40" : "bg-gray-100 dark:bg-gray-800/60"}`}
                >
                  <td className="px-4 py-2">{service.service_name}</td>
                  <td className="px-4 py-2">{service.category}</td>
                  <td className="px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold">
                    {service.price} Taka
                  </td>
                  <td className="px-4 py-2 flex flex-col sm:flex-row gap-2 justify-center">
                    <Link
                      href={`/services/${service._id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm text-center"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-xl mt-10">
          No services found for <span className="text-blue-500">{user?.email}</span>
        </p>
      )}
    </div>
  );
}
