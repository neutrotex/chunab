import connectDB from "../config/db.js";
import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const seedSuperAdmin = async () => {
    try {
        // Connect to database
        await connectDB();

        // Check if super admin already exists
        const existingSuperAdmin = await Admin.findOne({ role: 'super_admin' });
        if (existingSuperAdmin) {
            console.log("Super admin already exists!");
            console.log("Email:", existingSuperAdmin.email);
            process.exit(0);
        }

        // Create super admin
        const superAdminData = {
            name: "Super Administrator",
            email: "superadmin@chunab.com",
            password: "SuperAdmin@123",
            role: "super_admin"
        };

        // Hash password
        const salt = await bcrypt.genSalt(10);
        superAdminData.password = await bcrypt.hash(superAdminData.password, salt);

        const superAdmin = new Admin(superAdminData);
        await superAdmin.save();

        console.log("✅ Super admin created successfully!");
        console.log("Email:", superAdmin.email);
        console.log("Password:", "SuperAdmin@123");
        console.log("Role:", superAdmin.role);
        console.log("\n⚠️  Please change the password after first login!");

    } catch (error) {
        console.error("❌ Error creating super admin:", error);
    } finally {
        process.exit(0);
    }
};

// Run the seed function
seedSuperAdmin();
