export default class PetDTO {
    constructor(pet) {
        this.id = pet._id?.toString() || pet.id;
        this.name = pet.name;
        this.species = pet.type;
        this.age = pet.age;
        this.adopted = pet.adopted ?? false;
    }
}