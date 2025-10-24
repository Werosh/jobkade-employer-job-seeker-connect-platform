'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { logoutUser } from '@/lib/auth';

export default function Navbar() {
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-xl font-bold text-foreground">JobKade</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/jobs" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Find Jobs
            </Link>
            <Link 
              href="/post-job" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Post Jobs
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {loading ? (
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/dashboard" 
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
