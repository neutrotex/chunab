'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    licenseKey: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Basic validation
      if (!formData.email || !formData.password || !formData.licenseKey) {
        setError('All fields are required');
        return;
      }

      // Simulate API call - replace with actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any non-empty values
      if (formData.email && formData.password && formData.licenseKey) {
        // Store auth state in localStorage (in production, use secure tokens)
        localStorage.setItem('adminAuth', JSON.stringify({
          isAuthenticated: true,
          email: formData.email,
          timestamp: Date.now()
        }));
        
        router.push('/admin/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}
    >
      <div className="w-full max-w-sm animate-fade-in">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
            }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Admin Portal</h1>
          <p className="text-slate-600 text-sm">Sign in to access the dashboard</p>
        </div>

        {/* Login Form */}
        <div 
          className="rounded-2xl shadow-xl border border-slate-200 p-8"
          style={{
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all duration-200 hover:border-slate-400 focus:transform focus:-translate-y-0.5 focus:shadow-lg"
                  placeholder="admin@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all duration-200 hover:border-slate-400 focus:transform focus:-translate-y-0.5 focus:shadow-lg"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label htmlFor="licenseKey" className="block text-sm font-medium text-slate-700 mb-2">
                  License Key
                </label>
                <input
                  id="licenseKey"
                  name="licenseKey"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all duration-200 hover:border-slate-400 focus:transform focus:-translate-y-0.5 focus:shadow-lg"
                  placeholder="Enter license key"
                  value={formData.licenseKey}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {error && (
              <div 
                className="rounded-xl p-3 animate-fade-in"
                style={{
                  background: 'rgba(254, 242, 242, 0.8)',
                  border: '1px solid rgba(252, 165, 165, 0.5)'
                }}
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-700 text-sm font-medium">{error}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white py-3 px-4 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 active:transform active:translate-y-0"
              style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                boxShadow: isLoading ? '0 10px 25px rgba(220, 38, 38, 0.2)' : '0 10px 25px rgba(220, 38, 38, 0.3)'
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg 
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    style={{
                      animation: 'spin 1s linear infinite'
                    }}
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
