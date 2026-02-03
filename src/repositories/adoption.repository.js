import { AdoptionModel } from "../models/adoption.model.js";

export default class AdoptionRepository {
    constructor() {
        this.model = AdoptionModel;
    }

    async getAll() {
        return await this.model.find().populate("pet").populate("owner").lean();
    }

    async getById(id) {
        return await this.model.findById(id).populate("pet").populate("owner").lean();
    }

    async create(adoptionData) {
        const adoption = new this.model(adoptionData);
        return await adoption.save();
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}