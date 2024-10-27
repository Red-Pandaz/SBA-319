import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }
})

userSchema.index({username: 1})

export default mongoose.model('User', userSchema)