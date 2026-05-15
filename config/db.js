const mongoose = require("mongoose");

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        console.error("Missing MONGO_URI environment variable. Create a .env file or set MONGO_URI in your environment.");
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoUri);

        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Database connection failed");
        console.error(error.message);

        process.exit(1);
    }
};

module.exports = connectDB;