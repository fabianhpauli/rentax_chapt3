import {SpecificationRepository} from "../../repositories/implementations/SpecificationRepository"
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specficiationsRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specficiationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController}
