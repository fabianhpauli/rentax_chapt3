import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;
        const importCategoryUsecase = container.resolve(ImportCategoryUseCase);

        await importCategoryUsecase.execute(file);
        return res.status(201).send();
    }
}
export { ImportCategoryController };
