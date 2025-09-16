"use client";

import { useState, useEffect } from "react";
import { ChevronDown, User, Award, GraduationCap, Briefcase } from "lucide-react";
import { 
  nepalData, 
  getDistrictsByProvince, 
  getConstituenciesByDistrict,
  type Province,
  type District,
  type Constituency
} from "../data/nepalConstituencies";
import { 
  getCandidatesByConstituency,
  type Candidate
} from "../data/candidates";
import { 
  getPartyById,
  type Party
} from "../data/parties";

export default function HomeSearch() {
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedConstituency, setSelectedConstituency] = useState<string>("");
  const [districts, setDistricts] = useState<District[]>([]);
  const [constituencies, setConstituencies] = useState<Constituency[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [showCandidates, setShowCandidates] = useState<boolean>(false);

  // Reset dependent dropdowns when province changes
  useEffect(() => {
    if (selectedProvince) {
      const provinceDistricts = getDistrictsByProvince(selectedProvince);
      setDistricts(provinceDistricts);
      setSelectedDistrict("");
      setSelectedConstituency("");
      setConstituencies([]);
      setCandidates([]);
      setShowCandidates(false);
    } else {
      setDistricts([]);
      setConstituencies([]);
      setCandidates([]);
      setShowCandidates(false);
    }
  }, [selectedProvince]);

  // Reset constituency dropdown when district changes
  useEffect(() => {
    if (selectedDistrict && selectedProvince) {
      const districtConstituencies = getConstituenciesByDistrict(selectedProvince, selectedDistrict);
      setConstituencies(districtConstituencies);
      setSelectedConstituency("");
      setCandidates([]);
      setShowCandidates(false);
    } else {
      setConstituencies([]);
      setCandidates([]);
      setShowCandidates(false);
    }
  }, [selectedDistrict, selectedProvince]);

  // Load candidates when constituency is selected
  useEffect(() => {
    if (selectedConstituency) {
      const constituencyCandidates = getCandidatesByConstituency(selectedConstituency);
      setCandidates(constituencyCandidates);
      setShowCandidates(true);
    } else {
      setCandidates([]);
      setShowCandidates(false);
    }
  }, [selectedConstituency]);


  return (
    <div>
      {/* Constituency Search Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Find Your <span className="text-primary">Constituency</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Search for candidates and information specific to your area
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Province Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Province</label>
                <div className="relative">
                  <select
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                    className="w-full px-4 py-3 bg-input text-secondary-foreground rounded-xl border border-border/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 appearance-none pr-10"
                  >
                    <option value="">Select Province</option>
                    {nepalData.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* District Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">District</label>
                <div className="relative">
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedProvince}
                    className="w-full px-4 py-3 bg-input text-secondary-foreground rounded-xl border border-border/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 appearance-none pr-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select District</option>
                    {districts.map((district) => (
                      <option key={district.id} value={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Constituency Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Constituency</label>
                <div className="relative">
                  <select
                    value={selectedConstituency}
                    onChange={(e) => setSelectedConstituency(e.target.value)}
                    disabled={!selectedDistrict}
                    className="w-full px-4 py-3 bg-input text-secondary-foreground rounded-xl border border-border/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 appearance-none pr-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Constituency</option>
                    {constituencies.map((constituency) => (
                      <option key={constituency.id} value={constituency.id}>
                        {constituency.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Candidates Display Section */}
          {showCandidates && candidates.length > 0 && (
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-center mb-8">
                Candidates for {constituencies.find(c => c.id === selectedConstituency)?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {candidates.map((candidate) => {
                  const party = getPartyById(candidate.partyId);
                  return (
                    <div
                      key={candidate.id}
                      className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:border-primary/50 transition-colors"
                    >
                      <div className="text-center mb-4">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                          {candidate.photoURL ? (
                            <img 
                              src={candidate.photoURL} 
                              alt={candidate.name}
                              className="w-full h-full object-cover rounded-full"
                            />
                          ) : (
                            <User className="w-10 h-10 text-primary" />
                          )}
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-2">{candidate.name}</h4>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          {party?.symbolURL && (
                            <img 
                              src={party.symbolURL} 
                              alt={party.name}
                              className="w-6 h-6"
                            />
                          )}
                          <span className="text-sm text-muted-foreground">{party?.name || 'Unknown Party'}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {candidate.gender} • {candidate.publicScoreRating}/10 Rating
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Education:</span>
                          <span className="text-foreground">{candidate.education}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Assets:</span>
                          <span className="text-foreground">NPR {candidate.assetsWorth.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Experience:</span>
                          <span className="text-foreground">{candidate.pastElectionHistory}</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h5 className="font-semibold text-foreground mb-2">Agendas:</h5>
                        <ul className="space-y-1">
                          {candidate.agendas.map((agenda, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{agenda}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/30">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Public Rating:</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full" 
                                style={{ width: `${(candidate.publicScoreRating / 10) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-foreground font-semibold">{candidate.publicScoreRating}/10</span>
                          </div>
                        </div>
                      </div>

                      {candidate.criminalRecords.length > 0 && (
                        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                          <div className="text-sm text-red-400 font-semibold">⚠️ Criminal Records</div>
                          <div className="text-xs text-red-300 mt-1">
                            {candidate.criminalRecords.join(', ')}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {showCandidates && candidates.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-lg">No candidates found for the selected constituency.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}