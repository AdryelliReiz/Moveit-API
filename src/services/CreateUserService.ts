import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

interface IUserRequest {
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({username, email, password}: IUserRequest) {
    const prisma = new PrismaClient();

    if (!username) {
      throw new Error("Invalid username")
    }

    const alreadyExistEmail = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if (alreadyExistEmail) {
      throw new Error("This email is already exists")
    }

    if (!password) {
      throw new Error("You need to pass a password")
    }

    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: passwordHash
      }
    });

    return user;
  }
}

export { CreateUserService };