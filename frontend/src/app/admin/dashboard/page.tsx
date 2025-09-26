'use client';

import AdminLayout from '@/component/AdminLayout';
import Link from 'next/link';

export default function AdminDashboard() {
  // TODO: Replace with actual API calls to database
  const stats = {
    totalCandidates: 0,
    cleanCandidates: 0,
    candidatesWithCriminalRecords: 0,
    totalParties: 0
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="overflow-hidden shadow rounded-lg" style={{ backgroundColor: 'var(--card)' }}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                    <span className="text-sm font-medium" style={{ color: 'var(--primary-foreground)' }}>C</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium truncate" style={{ color: 'var(--muted-foreground)' }}>
                      Total Candidates
                    </dt>
                    <dd className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                      {stats.totalCandidates}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow rounded-lg" style={{ backgroundColor: 'var(--card)' }}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--chart-2)' }}>
                    <span className="text-sm font-medium" style={{ color: 'var(--primary-foreground)' }}>✓</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium truncate" style={{ color: 'var(--muted-foreground)' }}>
                      Clean Records
                    </dt>
                    <dd className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                      {stats.cleanCandidates}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow rounded-lg" style={{ backgroundColor: 'var(--card)' }}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--destructive)' }}>
                    <span className="text-sm font-medium" style={{ color: 'var(--destructive-foreground)' }}>⚠</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium truncate" style={{ color: 'var(--muted-foreground)' }}>
                      Criminal Records
                    </dt>
                    <dd className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                      {stats.candidatesWithCriminalRecords}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden shadow rounded-lg" style={{ backgroundColor: 'var(--card)' }}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--chart-3)' }}>
                    <span className="text-sm font-medium" style={{ color: 'var(--primary-foreground)' }}>P</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium truncate" style={{ color: 'var(--muted-foreground)' }}>
                      Political Parties
                    </dt>
                    <dd className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                      {stats.totalParties}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="shadow rounded-lg" style={{ backgroundColor: 'var(--card)' }}>
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium mb-4" style={{ color: 'var(--foreground)' }}>
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/admin/candidates"
                className="block p-4 border rounded-lg transition-colors"
                style={{ borderColor: 'var(--border)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <h4 className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>Candidate Management</h4>
                <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>Add, edit, and manage candidates</p>
              </Link>

              <Link
                href="/admin/parties"
                className="block p-4 border rounded-lg transition-colors"
                style={{ borderColor: 'var(--border)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <h4 className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>Party Management</h4>
                <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>Manage political parties and symbols</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="shadow rounded-lg" style={{ backgroundColor: 'var(--card)' }}>
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium mb-4" style={{ color: 'var(--foreground)' }}>
              Recent Activity
            </h3>
            <div className="text-center py-8">
              <p style={{ color: 'var(--muted-foreground)' }}>No recent activity to display</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
