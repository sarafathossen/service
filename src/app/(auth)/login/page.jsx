"use client";
import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      router.push("/"); // Login → Home redirect
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      router.push("/"); // Google Login → Home redirect
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
          Login
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 rounded dark:bg-gray-700 dark:text-gray-100 w-full"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 rounded dark:bg-gray-700 dark:text-gray-100 w-full"
          required
        />

        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="flex items-center justify-center border p-2 rounded gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          disabled={loading}
        >
          <FcGoogle size={24} /> Sign in with Google
        </button>
      </form>
    </div>
  );
}
