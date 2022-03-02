import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";


const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUsecase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUsecase);

export { createCategoryController, categoriesRepository }
