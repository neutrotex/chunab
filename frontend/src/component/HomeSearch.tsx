"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { 
  nepalData, 
  getDistrictsByProvince, 
  getConstituenciesByDistrict,
  getBoothLocationsByConstituency,
  type District,
  type Constituency,
  type BoothLocation
} from "../data/nepalConstituencies";
import { 
  getCandidatesByConstituency,
  type Candidate
} from "../data/candidates";
import CandidateCard from "./CandidateCard";
import ComplaintModal from "./ComplaintModal";
import MisconductModal from "./MisconductModal";
import DynamicMap from "./DynamicMap";

export default function HomeSearch() {
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedConstituency, setSelectedConstituency] = useState<string>("");
  const [districts, setDistricts] = useState<District[]>([]);
  const [constituencies, setConstituencies] = useState<Constituency[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [showCandidates, setShowCandidates] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [selectedCandidateForComplaint, setSelectedCandidateForComplaint] = useState<Candidate | null>(null);
  const [selectedCandidateForMisconduct, setSelectedCandidateForMisconduct] = useState<Candidate | null>(null);
  const [boothLocations, setBoothLocations] = useState<BoothLocation[]>([]);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

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

  // Load candidates and booth locations when constituency is selected
  useEffect(() => {
    if (selectedConstituency) {
      const constituencyCandidates = getCandidatesByConstituency(selectedConstituency);
      const constituencyBoothLocations = getBoothLocationsByConstituency(selectedConstituency);
      setCandidates(constituencyCandidates);
      setBoothLocations(constituencyBoothLocations);
      setShowCandidates(true);
    } else {
      setCandidates([]);
      setBoothLocations([]);
      setShowCandidates(false);
    }
  }, [selectedConstituency]);


  return (
    <div>
      {/* Constituency Search Section */}
      <section id="search" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Find Your <span className="text-primary">Constituency</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Search for candidates and information specific to your area
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
            {!isClient ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-muted-foreground">Loading...</div>
              </div>
            ) : (
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
            )}
          </div>

          {/* Candidates Display Section */}
          {showCandidates && candidates.length > 0 && (
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-center mb-8">
                Candidates for {constituencies.find(c => c.id === selectedConstituency)?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {candidates.map((candidate) => (
                  <CandidateCard 
                    key={candidate.id} 
                    candidate={candidate} 
                    onComplaintClick={setSelectedCandidateForComplaint}
                    onMisconductClick={setSelectedCandidateForMisconduct}
                  />
                ))}
              </div>
            </div>
          )}

          {showCandidates && candidates.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-lg">No candidates found for the selected constituency.</p>
            </div>
          )}

          {/* Booth Locations Map Section */}
          {showCandidates && boothLocations.length > 0 && (
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-center mb-8">
                Voting Booth Locations for {constituencies.find(c => c.id === selectedConstituency)?.name}
              </h3>
              <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                <DynamicMap 
                  boothLocations={boothLocations}
                  constituencyName={constituencies.find(c => c.id === selectedConstituency)?.name || ""}
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    {boothLocations.length} booth location{boothLocations.length !== 1 ? 's' : ''} found
                  </p>
                </div>
              </div>
            </div>
          )}

          {showCandidates && boothLocations.length === 0 && candidates.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-lg">No booth location data available for the selected constituency.</p>
            </div>
          )}
        </div>
      </section>

      {/* Complaint Modal */}
      {selectedCandidateForComplaint && (
        <ComplaintModal
          isOpen={!!selectedCandidateForComplaint}
          onClose={() => setSelectedCandidateForComplaint(null)}
          candidate={selectedCandidateForComplaint}
        />
      )}

      {/* Misconduct Modal */}
      {selectedCandidateForMisconduct && (
        <MisconductModal
          isOpen={!!selectedCandidateForMisconduct}
          onClose={() => setSelectedCandidateForMisconduct(null)}
        />
      )}
    </div>
  );
}