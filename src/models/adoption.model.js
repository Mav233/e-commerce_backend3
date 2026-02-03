import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pets",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
    adoptionDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export const AdoptionModel = mongoose.model("adoptions", adoptionSchema);