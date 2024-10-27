import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    commentContent: {
        type: String,
        required: true
    },
    commenter: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    }
})

commentSchema.index({commenter: 1})

export default mongoose.model('Comment', commentSchema)