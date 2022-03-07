import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listSpecificationUseCase = container.resolve(
            ListSpecificationsUseCase
        );
        const all = await listSpecificationUseCase.execute();
        return res.json(all);
    }
}

export { ListSpecificationController };
