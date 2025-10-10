import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other'],
        default: 'Male'
    },
    photoURL: {
        type: String,
        trim: true
    },
    party: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Party',
        required: true
    },
    education: {
        type: String,
        required: true,
        trim: true
    },
    assetsWorth: {
        type: Number,
        required: true,
        default: 0
    },
    publicScoreRating: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
        default: 0
    },
    constituency: {
        type: String,
        required: true,
        trim: true
    },
    pastExperience: {
        type: String,
        required: true,
        trim: true
    },
    agendas: [{
        type: String,
        trim: true
    }],
    criminalRecords: [{
        type: String,
        trim: true
    }],
    contactInfo: {
        phone: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            lowercase: true,
            trim: true
        },
        address: {
            type: String,
            trim: true
        }
    },
    // Additional fields for backend management
    position: {
        type: String,
        enum: ['MP', 'MLA', 'Mayor', 'Deputy Mayor', 'Chairperson', 'Vice Chairperson'],
        default: 'MP'
    },
    electionType: {
        type: String,
        enum: ['Federal', 'Provincial', 'Local'],
        default: 'Federal'
    },
    // Personal Information
    age: {
        type: Number,
        min: 21,
        max: 100
    },
    profession: {
        type: String,
        trim: true
    },
    // Address Information
    address: {
        district: {
            type: String,
            trim: true
        },
        municipality: {
            type: String,
            trim: true
        },
        ward: {
            type: Number
        }
    },
    // Campaign Information
    manifesto: {
        type: String,
        trim: true
    },
    campaignBudget: {
        type: Number,
        default: 0
    },
    // Social Media
    socialMedia: {
        facebook: {
            type: String,
            trim: true
        },
        twitter: {
            type: String,
            trim: true
        },
        instagram: {
            type: String,
            trim: true
        }
    },
    // Election Results
    votesReceived: {
        type: Number,
        default: 0
    },
    isWinner: {
        type: Boolean,
        default: false
    },
    // Status
    isActive: {
        type: Boolean,
        default: true
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    // Documents
    documents: {
        citizenship: {
            type: String,
            trim: true
        },
        partyMembership: {
            type: String,
            trim: true
        },
        nominationPaper: {
            type: String,
            trim: true
        }
    }
}, { 
    timestamps: true 
});

// Indexes for efficient searching
candidateSchema.index({ name: 'text', email: 'text', constituency: 'text' });
candidateSchema.index({ party: 1 });
candidateSchema.index({ constituency: 1 });
candidateSchema.index({ position: 1 });
candidateSchema.index({ electionType: 1 });
candidateSchema.index({ isActive: 1, isApproved: 1 });
candidateSchema.index({ createdBy: 1 });

// Virtual for full address
candidateSchema.virtual('fullAddress').get(function() {
    const addr = this.address;
    if (addr.district && addr.municipality) {
        return `${addr.municipality}, Ward ${addr.ward || 'N/A'}, ${addr.district}`;
    }
    return 'Address not provided';
});

// Virtual for vote percentage (will be calculated based on total votes in constituency)
candidateSchema.virtual('votePercentage').get(function() {
    // This would need to be calculated based on total votes in the constituency
    // For now, return 0
    return 0;
});

// Ensure virtual fields are serialized
candidateSchema.set('toJSON', { virtuals: true });

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
