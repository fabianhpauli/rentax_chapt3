import { AppError } from "@errors/AppErrors";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AuthenticateUserUseCase } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase";
import { CreateUserUseCase } from "@modules/accounts/useCases/CreateUser/CreateUserUseCase";

let authetincateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authetincateUserUseCase = new AuthenticateUserUseCase(
            usersRepositoryInMemory
        );
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    it("should be able to authenticate a user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "drvTest",
            email: "usertest@test.com",
            name: "name test user",
            password: "123",
        };
        await createUserUseCase.execute(user);
        const result = await authetincateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });
        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate a non existing user", () => {
        expect(async () => {
            await authetincateUserUseCase.execute({
                email: `any random user ${Math.random()} `,
                password: "any random password",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate with a incorrect password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: "drvTest",
                email: "usertest@test.com",
                name: "name test user",
                password: "123",
            };

            await createUserUseCase.execute(user);
            await authetincateUserUseCase.execute({
                email: user.email,
                password: `any random pass ${Math.random()} `,
                // password: user.password,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
