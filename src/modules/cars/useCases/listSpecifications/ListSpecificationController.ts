import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationUseCase"

class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationsUseCase) { }
    handle(req: Request, res: Response): Response {
        const all = this.listSpecificationUseCase.execute();
        return res.json(all)
    }
}

export { ListSpecificationController }