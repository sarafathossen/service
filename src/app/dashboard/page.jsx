"use client";
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null; // waiting for user info / redirect

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 sm:p-12 max-w-md w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Welcome, {user.displayName || user.email} 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is your dashboard. You can manage your services, profile, and more.
        </p>
        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
