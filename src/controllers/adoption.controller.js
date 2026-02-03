import AdoptionRepository from "../repositories/adoption.repository.js";
import { PetModel } from "../models/pet.model.js";
import { UserModel } from "../models/user.model.js";

const adoptionRepository = new AdoptionRepository();

/* GET ALL */
export const getAdoptions = async (req, res) => {
    try {
        const adoptions = await adoptionRepository.getAll();
        res.status(200).json({
            status: "success",
            payload: adoptions
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

/* GET BY ID */
export const getAdoptionById = async (req, res) => {
    try {
        const adoption = await adoptionRepository.getById(req.params.aid);
        if (!adoption) {
            return res.status(404).json({
                status: "error",
                error: "Adopción no encontrada"
            });
        }
        res.json({ status: "success", payload: adoption });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

/* CREATE */
export const createAdoption = async (req, res) => {
    try {
        const { uid, pid } = req.params;

        const user = await UserModel.findById(uid);
        const pet = await PetModel.findById(pid);

        if (!user || !pet) {
            return res.status(404).json({
                status: "error",
                error: "Usuario o mascota no encontrada"
            });
        }

        if (pet.adopted) {
            return res.status(400).json({
                status: "error",
                error: "La mascota ya fue adoptada"
            });
        }

        pet.adopted = true;
        await pet.save();

        const adoption = await adoptionRepository.create({
            owner: user._id,
            pet: pet._id,
            adoptionDate: new Date()
        });

        res.status(201).json({
            status: "success",
            payload: adoption
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

/* UPDATE */
export const updateAdoption = async (req, res) => {
    try {
        const updated = await adoptionRepository.update(req.params.aid, req.body);
        if (!updated) {
            return res.status(404).json({
                status: "error",
                error: "Adopción no encontrada"
            });
        }
        res.json({ status: "success", payload: updated });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

/* DELETE */
export const deleteAdoption = async (req, res) => {
    try {
        const deleted = await adoptionRepository.delete(req.params.aid);
        if (!deleted) {
            return res.status(404).json({
                status: "error",
                error: "Adopción no encontrada"
            });
        }
        res.json({ status: "success", payload: deleted });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};