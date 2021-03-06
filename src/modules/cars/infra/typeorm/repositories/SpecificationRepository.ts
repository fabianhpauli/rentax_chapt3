import { getRepository, Repository } from "typeorm";

import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import {
    ISpecificationRepository,
    ISpecificationDTO,
} from "@modules/cars/repositories/ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ name, description }: ISpecificationDTO): Promise<void> {
        const specification = this.repository.create({ name, description });
        await this.repository.save(specification);
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name });
        return specification;
    }
}

export { SpecificationsRepository };
