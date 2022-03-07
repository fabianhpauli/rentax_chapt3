import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepository } from "../repositories/implementations/UserRepository";

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: UsersRepository
    ) {}
    async execute({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (!userAlreadyExists) {
            const passwordHash = await hash(password, 8);

            await this.userRepository.create({
                name,
                email,
                password: passwordHash,
                driver_license,
            });
        } else {
            throw new Error("User already exists");
        }
    }
}

export { CreateCategoryUseCase };
