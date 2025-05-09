import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 7,
        },
        following: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            }
        ],
    },
    {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;