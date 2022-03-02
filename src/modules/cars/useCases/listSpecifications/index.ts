import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationsUseCase } from "./ListSpecificationUseCase"
import { ListSpecificationController } from "./ListSpecificationController"

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationsUseCase(specificationRepository);
const listSpecificationsController = new ListSpecificationController(listSpecificationUseCase);

export { listSpecificationsController }