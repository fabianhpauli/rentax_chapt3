import { Response, Request } from "express"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUsecase: CreateCategoryUseCase) { }

    handle(req: Request, res: Response): Response {
        const { name, description } = req.body;
        this.createCategoryUsecase.execute({ name, description });

        return res.status(201).send();
    }
}


export { CreateCategoryController }