import { AdoptionModel } from "../models/adoption.model.js";

export default class AdoptionDAO {
    getAll = async () => {
        return AdoptionModel.find();
    };

    create = async (adoption) => {
        return AdoptionModel.create(adoption);
    };
}