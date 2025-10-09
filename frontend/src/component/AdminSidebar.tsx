'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Building2, ChevronRight } from 'lucide-react';

interface AdminSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({ isCollapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />
    },
    {
      name: 'Candidates',
      href: '/admin/candidates',
      icon: <Users className="w-5 h-5" />
    },
    {
      name: 'Parties',
      href: '/admin/parties',
      icon: <Building2 className="w-5 h-5" />
    }
  ];

  return (
    <div className={`admin-bg admin-text transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b admin-border">
        {!isCollapsed && (
          <h2 className="text-xl font-bold admin-text">Admin Panel</h2>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg admin-hover transition-colors"
        >
          <ChevronRight className={`w-5 h-5 sidebar-arrow ${isCollapsed ? 'collapsed' : 'expanded'}`} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'admin-primary'
                      : 'admin-text admin-hover'
                  }`}
                >
                  <span className={`${isCollapsed ? 'mx-auto' : 'mr-3'}`}>
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}