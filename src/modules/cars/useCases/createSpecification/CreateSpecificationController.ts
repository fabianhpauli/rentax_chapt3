import {Request, Response} from "express";
import {CreateSpecificationUseCase} from "./CreateSpecificationUseCase"


class CreateSpecificationController{
    constructor(private createSpecificationUseCase : CreateSpecificationUseCase){}

    handle(req :Request, res: Response){
        const {name, description} = req.body;
        this.createSpecificationUseCase.execute({name, description})
        return res.status(200).send();
    }

}

export {CreateSpecificationController} 