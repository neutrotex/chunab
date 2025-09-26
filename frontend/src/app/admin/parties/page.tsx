'use client';

import { useState } from 'react';
import AdminLayout from '@/component/AdminLayout';

interface PartyFormData {
  name: string;
  symbolURL: string;
}

export default function AdminParties() {
  const [showForm, setShowForm] = useState(false);
  const [editingParty, setEditingParty] = useState<string | null>(null);
  const [parties, setParties] = useState<any[]>([]); // TODO: Replace with proper API data
  const [formData, setFormFormData] = useState<PartyFormData>({
    name: '',
    symbolURL: ''
  });

  // TODO: Replace with actual API calls
  const stats = {
    totalParties: parties.length,
    totalCandidates: parties.reduce((total, party) => total + (party.candidateCount || 0), 0)
  };

  const handleInputChange = (field: keyof PartyFormData, value: string) => {
    setFormFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/parties', {
        method: editingParty ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          id: editingParty
        }),
      });

      if (response.ok) {
        // TODO: Refresh parties list from API
        console.log('Party saved successfully');
        setShowForm(false);
        setEditingParty(null);
        resetForm();
      } else {
        console.error('Failed to save party');
      }
    } catch (error) {
      console.error('Error saving party:', error);
    }
  };

  const resetForm = () => {
    setFormFormData({
      name: '',
      symbolURL: ''
    });
  };

  const handleEdit = (partyId: string) => {
    const party = parties.find(p => p.id === partyId);
    if (party) {
      setFormFormData({
        name: party.name,
        symbolURL: party.symbolURL
      });
      setEditingParty(partyId);
      setShowForm(true);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>Party Management</h1>
            <p style={{ color: 'var(--muted-foreground)' }}>Manage political parties and their symbols</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 rounded-lg font-medium transition-colors"
            style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Add New Party
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow" style={{ backgroundColor: 'var(--card)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--muted)' }}>
                <svg className="w-6 h-6" style={{ color: 'var(--primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>Total Parties</p>
                <p className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>{stats.totalParties}</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow" style={{ backgroundColor: 'var(--card)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--muted)' }}>
                <svg className="w-6 h-6" style={{ color: 'var(--chart-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>Total Candidates</p>
                <p className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>
                  {stats.totalCandidates}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow" style={{ backgroundColor: 'var(--card)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--muted)' }}>
                <svg className="w-6 h-6" style={{ color: 'var(--chart-3)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>Active Parties</p>
                <p className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>{stats.totalParties}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Parties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parties.length > 0 ? (
            parties.map((party) => {
              const candidateCount = party.candidateCount || 0;
              return (
              <div key={party.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={party.symbolURL} 
                        alt={party.name} 
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{party.name}</h3>
                        <p className="text-sm text-gray-500">Political Party</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(party.id)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit Party"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          // TODO: Implement delete functionality
                          console.log('Delete party:', party.id);
                        }}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Party"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Candidates</span>
                      <span className="text-sm font-medium text-gray-900">{candidateCount}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Party ID</span>
                      <span className="text-sm font-mono text-gray-500">{party.id}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Symbol</span>
                      <img 
                        src={party.symbolURL} 
                        alt={`${party.name} symbol`}
                        className="w-8 h-8 rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No parties</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a new party.</p>
              </div>
            </div>
          )}
        </div>

        {/* Add/Edit Party Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {editingParty ? 'Edit Party' : 'Add New Party'}
                  </h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Party Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter party name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Symbol URL</label>
                    <input
                      type="url"
                      value={formData.symbolURL}
                      onChange={(e) => handleInputChange('symbolURL', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="https://example.com/symbol.png"
                      required
                    />
                  </div>

                  {/* Symbol Preview */}
                  {formData.symbolURL && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Symbol Preview</label>
                      <div className="flex items-center justify-center p-4 border border-gray-300 rounded-md bg-gray-50">
                        <img 
                          src={formData.symbolURL} 
                          alt="Symbol preview" 
                          className="max-w-20 max-h-20 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Form Actions */}
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                    >
                      {editingParty ? 'Update Party' : 'Add Party'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
