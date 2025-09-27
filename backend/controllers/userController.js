import User from "../models/useModel.js";

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists"
            });
        }

        // Create new user
        const newUser = new User({
            name,
            email
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: savedUser
        });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
