import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

interface IUserRequest {
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  async handle({username, email, password}: IUserRequest) {

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

    const user = prisma.user.create({
      data: {
        username,
        email,
        password: passwordHash
      }
    })

    return user;
  }
}

export { CreateUserService };