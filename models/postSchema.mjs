import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    postContent: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
})

postSchema.index({commenter: 1})

export default mongoose.model('Post', postSchema)