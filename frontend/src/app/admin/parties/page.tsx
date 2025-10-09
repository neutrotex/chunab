'use client';

import { useState } from 'react';
import AdminLayout from '@/component/AdminLayout';
import { X, Edit, Trash2, Building2 } from 'lucide-react';

interface Party {
  id: string;
  name: string;
  symbolURL: string;
  candidateCount?: number;
}

interface PartyFormData {
  name: string;
  symbolURL: string;
}

export default function AdminParties() {
  const [showForm, setShowForm] = useState(false);
  const [editingParty, setEditingParty] = useState<string | null>(null);
  const [parties, setParties] = useState<Party[]>([]); // TODO: Replace with proper API data
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

        {/* Add/Edit Party Form */}
        {showForm && (
          <div className="transition-all duration-500 ease-out transform animate-in slide-in-from-top-4">
            <div className="shadow rounded-lg p-6 mb-6" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
                  {editingParty ? 'Edit Party' : 'Add New Party'}
                </h3>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditingParty(null);
                    resetForm();
                  }}
                  className="p-2 rounded-lg transition-colors"
                  style={{ color: 'var(--muted-foreground)', backgroundColor: 'var(--muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)';
                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--muted-foreground)';
                    e.currentTarget.style.backgroundColor = 'var(--muted)';
                  }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Party Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: 'var(--input)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                    placeholder="Enter party name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Symbol URL</label>
                  <input
                    type="url"
                    value={formData.symbolURL}
                    onChange={(e) => handleInputChange('symbolURL', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: 'var(--input)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)'
                    }}
                    placeholder="https://example.com/symbol.png"
                    required
                  />
                </div>

                {/* Symbol Preview */}
                {formData.symbolURL && (
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Symbol Preview</label>
                    <div className="flex items-center justify-center p-4 border rounded-md" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--muted)' }}>
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
                    onClick={() => {
                      setShowForm(false);
                      setEditingParty(null);
                      resetForm();
                    }}
                    className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
                    style={{
                      backgroundColor: 'var(--muted)',
                      color: 'var(--muted-foreground)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {editingParty ? 'Update Party' : 'Add Party'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Parties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parties.length > 0 ? (
            parties.map((party) => {
              const candidateCount = party.candidateCount || 0;
              return (
              <div key={party.id} className="rounded-lg shadow hover:shadow-lg transition-shadow" style={{ backgroundColor: 'var(--card)' }}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={party.symbolURL} 
                        alt={party.name} 
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>{party.name}</h3>
                        <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Political Party</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(party.id)}
                        className="p-2 rounded-lg transition-colors"
                        style={{ color: 'var(--muted-foreground)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--primary)';
                          e.currentTarget.style.backgroundColor = 'var(--muted)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--muted-foreground)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                        title="Edit Party"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          // TODO: Implement delete functionality
                          console.log('Delete party:', party.id);
                        }}
                        className="p-2 rounded-lg transition-colors"
                        style={{ color: 'var(--muted-foreground)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--destructive)';
                          e.currentTarget.style.backgroundColor = 'var(--muted)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--muted-foreground)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                        title="Delete Party"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Candidates</span>
                      <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{candidateCount}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Party ID</span>
                      <span className="text-sm font-mono" style={{ color: 'var(--muted-foreground)' }}>{party.id}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Symbol</span>
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
              <div style={{ color: 'var(--muted-foreground)' }}>
                <Building2 className="mx-auto h-12 w-12" style={{ color: 'var(--muted-foreground)' }} />
                <h3 className="mt-2 text-sm font-medium" style={{ color: 'var(--foreground)' }}>No parties</h3>
                <p className="mt-1 text-sm" style={{ color: 'var(--muted-foreground)' }}>Get started by creating a new party.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </AdminLayout>
  );
}
