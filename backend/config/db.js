import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
};

export default connectDB;
