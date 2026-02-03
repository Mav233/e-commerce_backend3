import { Router } from "express";
import { generateMockUsers } from "../mocks/users.mock.js";
import { generateMockPets } from "../mocks/pets.mock.js";
import { UserModel } from "../models/user.model.js";
import { PetModel } from "../models/pet.model.js";

const router = Router();

/* GET /api/mocks/mockingusers */
router.get("/mockingusers", (req, res) => {
    const users = generateMockUsers(50);

    res.json({
        status: "success",
        payload: users
    });
});

/* GET /api/mocks/mockingpets */
router.get("/mockingpets", (req, res) => {
    const pets = generateMockPets(20);

    res.json({
        status: "success",
        payload: pets
    });
});

/* POST /api/mocks/generateData */
router.post("/generateData", async (req, res) => {
    try {
        const { users = 0, pets = 0 } = req.body;

        const mockUsers = generateMockUsers(Number(users));
        const mockPets = generateMockPets(Number(pets));

        if (users > 0) {
            await UserModel.insertMany(mockUsers);
        }

        if (pets > 0) {
            await PetModel.insertMany(mockPets);
        }

        res.json({
            status: "success",
            message: "Datos generados correctamente",
            inserted: {
                users: mockUsers.length,
                pets: mockPets.length
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            error: error.message
        });
    }
});

export default router;