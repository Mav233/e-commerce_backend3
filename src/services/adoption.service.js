import AdoptionRepository from "../repositories/adoption.repository.js";
import { PetModel } from "../models/pet.model.js";
import { UserModel } from "../models/user.model.js";

const adoptionRepository = new AdoptionRepository();

export default class AdoptionService {

    async getAll() {
        return await adoptionRepository.getAllAdoptions();
    }

    async getById(adoptionId) {
        const adoption = await adoptionRepository.getAdoptionById(adoptionId);
        if (!adoption) {
            throw new Error("Adopción no encontrada");
        }
        return adoption;
    }

    async create(uid, pid) {
        const user = await UserModel.findById(uid);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        const pet = await PetModel.findById(pid);
        if (!pet) {
            throw new Error("Mascota no encontrada");
        }

        if (pet.adopted) {
            throw new Error("La mascota ya fue adoptada");
        }

        pet.adopted = true;
        await pet.save();

        const adoption = await adoptionRepository.createAdoption({
            owner: user._id,
            pet: pet._id,
            adoptionDate: new Date()
        });

        return adoption;
    }

    async update(adoptionId, data) {
        const updated = await adoptionRepository.updateAdoption(adoptionId, data);
        if (!updated) {
            throw new Error("Adopción no encontrada");
        }
        return updated;
    }

    async delete(adoptionId) {
        const deleted = await adoptionRepository.deleteAdoption(adoptionId);
        if (!deleted) {
            throw new Error("Adopción no encontrada");
        }
        return deleted;
    }
}