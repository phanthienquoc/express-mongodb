import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactShema = new Schema({
    firstName: {
        type: String,
        required: "Enter a first name"
    },
    lastName: {
        type: String,
        required: "Enter a last name"
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    create_date: {
        type: String,
        default: Date.now
    }
})