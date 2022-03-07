import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specficiationsRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
    specficiationsRepository
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createSpecificationController };
