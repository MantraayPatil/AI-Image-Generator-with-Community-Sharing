import mongoose from 'mongoose';

/**
 * Connect to MongoDB using the provided connection URL.
 * @param {string} url - The connection URL for the MongoDB database.
 */
const connectDB = (url) => {
    // Enable strict query mode
    mongoose.set('strictQuery', true);

    // Connect to the MongoDB database
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process with failure code
    });
};

export default connectDB;
