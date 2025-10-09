'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from './AdminSidebar';
import { Bell, ChevronDown } from 'lucide-react';

interface AdminData {
  isAuthenticated: boolean;
  email: string;
  timestamp: number;
}

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const router = useRouter();

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem('adminAuth');
        if (authData) {
          const parsed = JSON.parse(authData);
          const isExpired = Date.now() - parsed.timestamp > 24 * 60 * 60 * 1000;
          if (!isExpired) {
            setIsAuthenticated(true);
            setAdminData(parsed);
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

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    router.push('/admin');
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 mx-auto" style={{ borderColor: 'var(--primary)' }}></div>
          <p className="mt-4" style={{ color: 'var(--muted-foreground)' }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push('/admin');
    return null;
  }

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: 'var(--background)' }}>
      {/* Sidebar */}
      <AdminSidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="shadow-sm border-b px-6 py-4" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>Admin Dashboard</h1>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Welcome back, {adminData?.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="p-2 rounded-lg transition-colors" style={{ color: 'var(--muted-foreground)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <Bell className="w-5 h-5" />
              </button>
              
              {/* User Menu */}
              <div className="relative">
                <button className="flex items-center space-x-2 p-2 rounded-lg transition-colors" style={{ color: 'var(--foreground)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                    <span className="text-sm font-bold" style={{ color: 'var(--primary-foreground)' }}>
                      {adminData?.email?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{adminData?.email}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ backgroundColor: 'var(--destructive)', color: 'var(--destructive-foreground)' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}