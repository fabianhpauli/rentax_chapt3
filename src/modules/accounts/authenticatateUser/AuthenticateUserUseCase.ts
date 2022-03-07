import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository") private userRepository: IUsersRepository
    ) {}

    async execute({ password, email }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("Email or password do not match");
        }
        const paswordMatch = await compare(password, user.password);

        if (!paswordMatch) {
            throw new Error("Email or password do not match");
        }

        const token = sign({}, "8dcc59e5cb89ff9a806d971796904746", {
            subject: user.id,
            expiresIn: "1d",
        });

        return { user, token };
    }
}

export { AuthenticateUserUseCase };
