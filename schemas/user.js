import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    pwd: {type: String, required: true},
    email: {type: String, required: true},
    views: Number
});

const User = mongoose.model("User", userSchema);

export { User }