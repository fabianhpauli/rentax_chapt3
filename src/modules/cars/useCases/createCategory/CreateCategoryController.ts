import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;

        const createCategoryUsecase = container.resolve(CreateCategoryUseCase);

        await createCategoryUsecase.execute({ name, description });

        return res.status(201).send();
    }
}

export { CreateCategoryController };
