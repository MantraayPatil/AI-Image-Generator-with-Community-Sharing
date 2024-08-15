import mongoose from 'mongoose';

// Define the schema for a Post
const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    prompt: {
        type: String,
        required: true,
        trim: true,
    },
    photo: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});

// Create a model from the schema
const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;