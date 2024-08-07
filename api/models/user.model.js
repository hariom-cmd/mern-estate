import  mongoose  from 'mongoose';

// rules for entering data in user
const userSchema = new mongoose.Schema({
    username: {
        type: String, // numbers and boolen not allowed
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},{timestamps: true} ); // timestamp for time of creation ot the user & updation of the user

const User = mongoose.model('User',userSchema); // moodel for users

export default User; // set default to use this model anywhere in the application

