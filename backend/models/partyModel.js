import mongoose from "mongoose";

const partySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    symbolURL: {
        type: String,
        required: true,
        trim: true
    },
    // Additional fields for backend management
    shortName: {
        type: String,
        trim: true,
        unique: true,
        sparse: true,
        uppercase: true
    },
    symbol: {
        type: String,
        trim: true
    },
    symbolImage: {
        type: String,
        default: null
    },
    color: {
        type: String,
        default: '#000000'
    },
    description: {
        type: String,
        trim: true
    },
    foundedYear: {
        type: Number
    },
    leader: {
        name: {
            type: String,
            trim: true
        },
        position: {
            type: String,
            trim: true
        }
    },
    headquarters: {
        type: String,
        trim: true
    },
    ideology: {
        type: String,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    // Election specific data
    totalCandidates: {
        type: Number,
        default: 0
    },
    totalVotes: {
        type: Number,
        default: 0
    },
    seatsWon: {
        type: Number,
        default: 0
    }
}, { 
    timestamps: true 
});

// Index for efficient searching
partySchema.index({ name: 'text', shortName: 'text', description: 'text' });
partySchema.index({ isActive: 1 });
partySchema.index({ createdBy: 1 });

// Virtual for party symbol URL
partySchema.virtual('symbolUrl').get(function() {
    if (this.symbolImage) {
        return `/images/party-symbols/${this.symbolImage}`;
    }
    return null;
});

// Ensure virtual fields are serialized
partySchema.set('toJSON', { virtuals: true });

const Party = mongoose.model("Party", partySchema);

export default Party;
