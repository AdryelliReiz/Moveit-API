import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { stringify } from "querystring";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    const token = sign({
      email: user.email
    }, "3871e895063b5f4c13c8f90f1b0baf39", {
      expiresIn: "1w",
      subject: user.id.toString()
    });

    return token;
  }
}

export { AuthenticateUserService };