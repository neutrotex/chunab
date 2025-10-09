'use client';

import { useState } from 'react';
import AdminLayout from '@/component/AdminLayout';
import { X, Edit, Trash2 } from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  photoURL: string;
  partyId: string;
  education: string;
  assetsWorth: number;
  publicScoreRating: number;
  constituencyId: string;
  pastExperience: string;
  agendas: string[];
  criminalRecords: string[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

interface Party {
  id: string;
  name: string;
  symbolURL: string;
  candidateCount?: number;
}

interface Constituency {
  id: string;
  name: string;
  district: string;
  province: string;
}

interface CandidateFormData {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  photoURL: string;
  partyId: string;
  pastExperience: string;
  agendas: string[];
  education: string;
  assetsWorth: number;
  criminalRecords: string[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  publicScoreRating: number;
  constituencyId: string;
}

export default function AdminCandidates() {
  const [showForm, setShowForm] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState<string | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]); // TODO: Replace with proper API data
  const [parties, setParties] = useState<Party[]>([]); // TODO: Replace with proper API data
  const [constituencies, setConstituencies] = useState<Constituency[]>([]); // TODO: Replace with proper API data
  const [formData, setFormData] = useState<CandidateFormData>({
    name: '',
    gender: 'Male',
    photoURL: '',
    partyId: '',
    pastExperience: '',
    agendas: [''],
    education: '',
    assetsWorth: 0,
    criminalRecords: [''],
    contactInfo: {
      phone: '',
      email: '',
      address: ''
    },
    publicScoreRating: 0,
    constituencyId: ''
  });

  // TODO: Replace with actual API calls
  const stats = {
    totalCandidates: candidates.length,
    cleanCandidates: candidates.filter(c => c.criminalRecords?.length === 0).length,
    candidatesWithCriminalRecords: candidates.filter(c => c.criminalRecords?.length > 0).length
  };

  const handleInputChange = (field: string, value: string | number) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof CandidateFormData] as Record<string, string | number>),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleArrayChange = (field: 'agendas' | 'criminalRecords', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'agendas' | 'criminalRecords') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'agendas' | 'criminalRecords', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/candidates', {
        method: editingCandidate ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          id: editingCandidate
        }),
      });

      if (response.ok) {
        // TODO: Refresh candidates list from API
        console.log('Candidate saved successfully');
        setShowForm(false);
        setEditingCandidate(null);
        resetForm();
      } else {
        console.error('Failed to save candidate');
      }
    } catch (error) {
      console.error('Error saving candidate:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      gender: 'Male',
      photoURL: '',
      partyId: '',
      pastExperience: '',
      agendas: [''],
      education: '',
      assetsWorth: 0,
      criminalRecords: [''],
      contactInfo: {
        phone: '',
        email: '',
        address: ''
      },
      publicScoreRating: 0,
      constituencyId: ''
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>Candidate Management</h1>
            <p style={{ color: 'var(--muted-foreground)' }}>Manage election candidates and their information</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 rounded-lg font-medium transition-colors"
            style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Add New Candidate
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow" style={{ backgroundColor: 'var(--card)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--muted)' }}>
                <svg className="w-6 h-6" style={{ color: 'var(--primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>Total Candidates</p>
                <p className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>{stats.totalCandidates}</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow" style={{ backgroundColor: 'var(--card)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--muted)' }}>
                <svg className="w-6 h-6" style={{ color: 'var(--chart-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>Clean Records</p>
                <p className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>
                  {stats.cleanCandidates}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow" style={{ backgroundColor: 'var(--card)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--muted)' }}>
                <svg className="w-6 h-6" style={{ color: 'var(--destructive)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>Criminal Records</p>
                <p className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>
                  {stats.candidatesWithCriminalRecords}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Add/Edit Candidate Form */}
        {showForm && (
          <div className="transition-all duration-500 ease-out transform animate-in slide-in-from-top-4">
            <div className="shadow rounded-lg p-6 mb-6" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
                  {editingCandidate ? 'Edit Candidate' : 'Add New Candidate'}
                </h3>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditingCandidate(null);
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Information */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Name</label>
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
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Gender</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--input)', 
                        borderColor: 'var(--border)', 
                        color: 'var(--foreground)'
                      }}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Photo URL</label>
                    <input
                      type="url"
                      value={formData.photoURL}
                      onChange={(e) => handleInputChange('photoURL', e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--input)', 
                        borderColor: 'var(--border)', 
                        color: 'var(--foreground)'
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Party</label>
                    <select
                      value={formData.partyId}
                      onChange={(e) => handleInputChange('partyId', e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--input)', 
                        borderColor: 'var(--border)', 
                        color: 'var(--foreground)'
                      }}
                      required
                    >
                      <option value="">Select Party</option>
                      {parties.map(party => (
                        <option key={party.id} value={party.id}>{party.name}</option>
                      ))}
                      {parties.length === 0 && (
                        <option value="" disabled>No parties available. Add parties first.</option>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Education</label>
                    <input
                      type="text"
                      value={formData.education}
                      onChange={(e) => handleInputChange('education', e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--input)', 
                        borderColor: 'var(--border)', 
                        color: 'var(--foreground)'
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Assets Worth (NPR)</label>
                    <input
                      type="number"
                      value={formData.assetsWorth}
                      onChange={(e) => handleInputChange('assetsWorth', Number(e.target.value))}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--input)', 
                        borderColor: 'var(--border)', 
                        color: 'var(--foreground)'
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Public Score Rating (0-10)</label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={formData.publicScoreRating}
                      onChange={(e) => handleInputChange('publicScoreRating', Number(e.target.value))}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--input)', 
                        borderColor: 'var(--border)', 
                        color: 'var(--foreground)'
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Constituency</label>
                    <select
                      value={formData.constituencyId}
                      onChange={(e) => handleInputChange('constituencyId', e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--input)', 
                        borderColor: 'var(--border)', 
                        color: 'var(--foreground)'
                      }}
                      required
                    >
                      <option value="">Select Constituency</option>
                      {constituencies.map(constituency => (
                        <option key={constituency.id} value={constituency.id}>
                          {constituency.name} - {constituency.district}, {constituency.province}
                        </option>
                      ))}
                      {constituencies.length === 0 && (
                        <option value="" disabled>No constituencies available. Load constituencies first.</option>
                      )}
                    </select>
                  </div>
                </div>

                {/* Past Experience */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Past Experience</label>
                  <textarea
                    value={formData.pastExperience}
                    onChange={(e) => handleInputChange('pastExperience', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: 'var(--input)', 
                      borderColor: 'var(--border)', 
                      color: 'var(--foreground)'
                    }}
                    required
                  />
                </div>

                {/* Agendas */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Agendas</label>
                  {formData.agendas.map((agenda, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={agenda}
                        onChange={(e) => handleArrayChange('agendas', index, e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                        style={{ 
                          backgroundColor: 'var(--input)', 
                          borderColor: 'var(--border)', 
                          color: 'var(--foreground)'
                        }}
                        placeholder="Enter agenda"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('agendas', index)}
                        className="px-3 py-2 transition-colors"
                        style={{ color: 'var(--destructive)' }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('agendas')}
                    className="transition-colors text-sm"
                    style={{ color: 'var(--primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    + Add Agenda
                  </button>
                </div>

                {/* Criminal Records */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Criminal Records</label>
                  {formData.criminalRecords.map((record, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={record}
                        onChange={(e) => handleArrayChange('criminalRecords', index, e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                        style={{ 
                          backgroundColor: 'var(--input)', 
                          borderColor: 'var(--border)', 
                          color: 'var(--foreground)'
                        }}
                        placeholder="Enter criminal record description"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('criminalRecords', index)}
                        className="px-3 py-2 transition-colors"
                        style={{ color: 'var(--destructive)' }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('criminalRecords')}
                    className="transition-colors text-sm"
                    style={{ color: 'var(--primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    + Add Criminal Record
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Phone</label>
                    <input
                      type="tel"
                      value={formData.contactInfo.phone}
                      onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--input)', 
                        borderColor: 'var(--border)', 
                        color: 'var(--foreground)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Email</label>
                    <input
                      type="email"
                      value={formData.contactInfo.email}
                      onChange={(e) => handleInputChange('contactInfo.email', e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--input)', 
                        borderColor: 'var(--border)', 
                        color: 'var(--foreground)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>Address</label>
                    <input
                      type="text"
                      value={formData.contactInfo.address}
                      onChange={(e) => handleInputChange('contactInfo.address', e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--input)', 
                        borderColor: 'var(--border)', 
                        color: 'var(--foreground)'
                      }}
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingCandidate(null);
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
                    {editingCandidate ? 'Update Candidate' : 'Add Candidate'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Candidates Table */}
        <div className="shadow rounded-lg" style={{ backgroundColor: 'var(--card)' }}>
          <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
            <h3 className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>All Candidates</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y" style={{ borderColor: 'var(--border)' }}>
              <thead style={{ backgroundColor: 'var(--muted)' }}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Party</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Education</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Assets (NPR)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                {candidates.length > 0 ? (
                  candidates.slice(0, 10).map((candidate) => {
                    const party = parties.find(p => p.id === candidate.partyId);
                    return (
                      <tr key={candidate.id} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              {candidate.photoURL ? (
                                <img className="h-10 w-10 rounded-full" src={candidate.photoURL} alt={candidate.name} />
                              ) : (
                                <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--muted)' }}>
                                  <span className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>
                                    {candidate.name.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{candidate.name}</div>
                              <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{candidate.pastExperience}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {party?.symbolURL && (
                              <img className="h-6 w-6 rounded" src={party.symbolURL} alt={party.name} />
                            )}
                            <span className="ml-2 text-sm" style={{ color: 'var(--foreground)' }}>{party?.name || 'No Party'}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: 'var(--foreground)' }}>{candidate.gender}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: 'var(--foreground)' }}>{candidate.education}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: 'var(--foreground)' }}>
                          {candidate.assetsWorth?.toLocaleString() || '0'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-1 rounded-full h-2 mr-2" style={{ backgroundColor: 'var(--muted)' }}>
                              <div 
                                className="h-2 rounded-full" 
                                style={{ 
                                  backgroundColor: 'var(--primary)',
                                  width: `${((candidate.publicScoreRating || 0) / 10) * 100}%` 
                                }}
                              ></div>
                            </div>
                            <span className="text-sm" style={{ color: 'var(--foreground)' }}>{candidate.publicScoreRating || 0}/10</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button 
                            onClick={() => {
                              setFormData(candidate);
                              setEditingCandidate(candidate.id);
                              setShowForm(true);
                            }}
                            className="mr-3 p-2 rounded-lg transition-colors"
                            style={{ color: 'var(--primary)' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            title="Edit Candidate"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => {
                              // TODO: Implement delete functionality
                              console.log('Delete candidate:', candidate.id);
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
                            title="Delete Candidate"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center" style={{ color: 'var(--muted-foreground)' }}>
                      No candidates found. Add your first candidate to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
