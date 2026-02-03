import { faker } from "@faker-js/faker";

export const generateMockPet = () => ({
    _id: faker.database.mongodbObjectId(),
    name: faker.animal.petName(),
    type: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 15 }),
    adopted: faker.datatype.boolean(),
    createdAt: new Date(),
    updatedAt: new Date()
});

export const generateMockPets = (qty = 10) => {
    const pets = [];

    for (let i = 0; i < qty; i++) {
        pets.push(generateMockPet());
    }

    return pets;
};