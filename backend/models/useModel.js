import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    userType: {
        type: String,
        enum: ['voter', 'candidate', 'observer'],
        default: 'voter'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    // Additional fields for future voter authentication
    voterId: {
        type: String,
        sparse: true // Allows multiple null values
    },
    constituency: {
        type: String
    },
    hasVoted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;