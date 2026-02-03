import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

const PASSWORD = "coder123";

const createHashedPassword = () => {
    return bcrypt.hashSync(PASSWORD, 10);
};

export const generateMockUser = () => ({
    _id: faker.database.mongodbObjectId(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: createHashedPassword(),
    role: faker.helpers.arrayElement(["user", "admin"]),
    pets: [],
    createdAt: new Date(),
    updatedAt: new Date()
});

export const generateMockUsers = (qty = 50) => {
    const users = [];

    for (let i = 0; i < qty; i++) {
        users.push(generateMockUser());
    }

    return users;
};