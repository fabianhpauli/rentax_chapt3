import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppErrors";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {}
    async execute({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (!userAlreadyExists) {
            const passwordHash = await hash(password, 8);

            await this.usersRepository.create({
                name,
                email,
                password: passwordHash,
                driver_license,
            });
        } else {
            throw new AppError("User already exists.");
        }
    }
}

export { CreateCategoryUseCase };
