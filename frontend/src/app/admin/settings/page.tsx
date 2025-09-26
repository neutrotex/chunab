'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminSettings() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem('adminAuth');
        if (authData) {
          const parsed = JSON.parse(authData);
          const isExpired = Date.now() - parsed.timestamp > 24 * 60 * 60 * 1000;
          if (!isExpired) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('adminAuth');
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push('/admin');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Settings</h1>
              <p className="text-gray-600">System settings configuration will be implemented here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
