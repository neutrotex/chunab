import { User, Award, GraduationCap, Briefcase, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { getPartyById } from "../data/parties";
import { type Candidate } from "../data/candidates";

interface CandidateCardProps {
  candidate: Candidate;
  onComplaintClick: (candidate: Candidate) => void;
  onMisconductClick: (candidate: Candidate) => void;
}

export default function CandidateCard({ candidate, onComplaintClick, onMisconductClick }: CandidateCardProps) {
  const party = getPartyById(candidate.partyId);

  return (
    <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-border/60 hover:border-primary/50 transition-colors">
      <div className="text-center mb-4">
        <div className="w-26 h-26 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
          {candidate.photoURL ? (
            <Image 
              src={candidate.photoURL} 
              alt={candidate.name}
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
          ) : null}
          <User className={`w-12 h-12 text-primary ${candidate.photoURL ? 'hidden' : ''}`} />
        </div>
        <h4 className="text-xl font-bold text-foreground mb-2">{candidate.name}</h4>
        <div className="flex items-center justify-center gap-2 mb-2">
          {party?.symbolURL && (
            <Image 
              src={party.symbolURL} 
              alt={party.name}
              width={24}
              height={24}
              className="w-6 h-6"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
          <span className="text-sm text-muted-foreground">{party?.name || 'Unknown Party'}</span>
        </div>
        <div className="text-sm text-muted-foreground">
          {candidate.gender}
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
          <span className="text-foreground">{candidate.pastExperience}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">Location:</span>
          <span className="text-foreground">{candidate.contactInfo.address || 'Not specified'}</span>
        </div>
      </div>

      <div className="mt-4">
        <h5 className="font-semibold text-foreground mb-2">Key Agendas:</h5>
        <ul className="space-y-1">
          {candidate.agendas.map((agenda, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{agenda}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Information */}
      <div className="mt-4 pt-4 border-t border-border/30">
        <h5 className="font-semibold text-foreground mb-3">Contact Information</h5>
        <div className="space-y-2 text-sm">
          {candidate.contactInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Phone:</span>
              <a href={`tel:${candidate.contactInfo.phone}`} className="text-foreground hover:text-primary transition-colors">
                {candidate.contactInfo.phone}
              </a>
            </div>
          )}
          {candidate.contactInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Email:</span>
              <a href={`mailto:${candidate.contactInfo.email}`} className="text-foreground hover:text-primary transition-colors">
                {candidate.contactInfo.email}
              </a>
            </div>
          )}
        </div>
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

      {/* Action Buttons */}
      <div className="mt-4 pt-4 border-t border-border/30 space-y-2">
        <button 
          className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 hover:border-red-500/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
          onClick={() => onComplaintClick(candidate)}
        >
          Complaint against Candidate
        </button>
        <button 
          className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 hover:border-red-500/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
          onClick={() => onMisconductClick(candidate)}
        >
          Report Election Misconduct
        </button>
      </div>

    </div>
  );
}
