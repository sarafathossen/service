"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Workly</Link>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Menu Links */}
        <div className={`flex-col md:flex-row md:flex md:items-center w-full md:w-auto absolute md:static top-full left-0 md:top-auto bg-gray-800 md:bg-transparent transition-all duration-300 ${open ? "flex" : "hidden"} md:flex`}>
          <Link href="/" className="block px-4 py-2 md:py-0 hover:text-blue-400 transition" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" className="block px-4 py-2 md:py-0 hover:text-blue-400 transition" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" className="block px-4 py-2 md:py-0 hover:text-blue-400 transition" onClick={() => setOpen(false)}>About us</Link>
          <Link href="/contact" className="block px-4 py-2 md:py-0 hover:text-blue-400 transition" onClick={() => setOpen(false)}>Contact us</Link>
          {user && (
            <>
              <Link href="/add-service" className="block px-4 py-2 md:py-0 hover:text-blue-400 transition" onClick={() => setOpen(false)}>Add Service</Link>
              <Link href="/manage-service" className="block px-4 py-2 md:py-0 hover:text-blue-400 transition" onClick={() => setOpen(false)}>Manage Service</Link>
            </>
          )}
        </div>

        {/* Right side: Dashboard/Login/Register */}
        <div className="hidden md:flex md:items-center md:space-x-2">
          {user ? (
            <Link href="/dashboard" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
