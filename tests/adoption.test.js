import { expect } from "chai";
import supertest from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { UserModel } from "../src/models/user.model.js";
import { PetModel } from "../src/models/pet.model.js";

dotenv.config();

const requester = supertest("http://localhost:8080");

describe("Adoption Router - Tests funcionales", function () {
    this.timeout(10000);

    let userId;
    let petId;
    let adoptionId;

    before(async () => {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO_URL);
        }

        /* USER MOCK */
        const user = await UserModel.create({
            first_name: "Test",
            last_name: "User",
            email: `test${Date.now()}@mail.com`,
            password: "123456",
            role: "user"
        });

        userId = user._id;

        /* PET MOCK */
        const pet = await PetModel.create({
            name: "Firulais Test",
            species: "dog",
            type: "dog",
            age: 3,
            adopted: false
        });

        petId = pet._id;
    });

    it("GET /api/adoptions → debe devolver un array", async () => {
        const res = await requester.get("/api/adoptions");

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal("success");
        expect(res.body.payload).to.be.an("array");
    });

    it("POST /api/adoptions/:uid/:pid → debe crear una adopción", async () => {
        const res = await requester.post(
            `/api/adoptions/${userId}/${petId}`
        );

        expect(res.status).to.equal(201);
        expect(res.body.status).to.equal("success");
        expect(res.body.payload).to.have.property("_id");

        adoptionId = res.body.payload._id;
    });

    it("GET /api/adoptions/:aid → debe obtener la adopción", async () => {
        const res = await requester.get(`/api/adoptions/${adoptionId}`);

        expect(res.status).to.equal(200);
        expect(res.body.payload._id).to.equal(adoptionId.toString());
    });
});