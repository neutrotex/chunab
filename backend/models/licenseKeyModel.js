import mongoose from "mongoose";

const licenseKeySchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        default: null
    },
    assignedEmail: {
        type: String,
        default: null,
        lowercase: true,
        trim: true
    },
    isUsed: {
        type: Boolean,
        default: false
    },
    usedAt: {
        type: Date,
        default: null
    },
    expiresAt: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    permissions: {
        canManageCandidates: {
            type: Boolean,
            default: true
        },
        canManageParties: {
            type: Boolean,
            default: true
        },
        canViewAnalytics: {
            type: Boolean,
            default: false
        },
        canManageUsers: {
            type: Boolean,
            default: false
        }
    }
}, { 
    timestamps: true 
});

// Generate a unique license key
licenseKeySchema.statics.generateKey = function() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
        if (i === 3 || i === 7 || i === 11) {
            result += '-';
        }
    }
    return result;
};

// Check if license key is valid and not expired
licenseKeySchema.methods.isValid = function() {
    return this.isActive && !this.isUsed && new Date() < this.expiresAt;
};

// Assign license key to an admin
licenseKeySchema.methods.assignToAdmin = async function(adminId, email) {
    if (this.isUsed) {
        throw new Error('License key is already used');
    }
    
    if (!this.isValid()) {
        throw new Error('License key is expired or inactive');
    }
    
    this.assignedTo = adminId;
    this.assignedEmail = email;
    this.isUsed = true;
    this.usedAt = new Date();
    
    return await this.save();
};

const LicenseKey = mongoose.model("LicenseKey", licenseKeySchema);

export default LicenseKey;
