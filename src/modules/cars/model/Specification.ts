import { v4 as uuidv4 } from "uuid";

class Specification {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor({ name, description }: { name: string; description: string; }) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.created_at = new Date();
    }
}

export { Specification }