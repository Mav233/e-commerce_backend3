export default class AdoptionDTO {
    constructor(adoption) {
        this.id = adoption._id;
        this.status = adoption.status;
        this.adoptionDate = adoption.adoptionDate;

        this.pet = adoption.pet
            ? {
                id: adoption.pet._id,
                name: adoption.pet.name,
                type: adoption.pet.type,
                age: adoption.pet.age
            }
            : null;

        this.owner = adoption.owner
            ? {
                id: adoption.owner._id,
                first_name: adoption.owner.first_name,
                email: adoption.owner.email
            }
            : null;
    }
}