import { PrismaClient } from ".prisma/client";

interface IUpdateXP {
  userId: string;
  xp: number;
}

class UpdateUserXPService {
  async execute({userId, xp}: IUpdateXP) {
    const prisma = new PrismaClient();

    const user = await prisma.user.update({
      where: {
        id: parseInt(userId)
      },
      data: {
        xp: xp
      }
    });

    const userXP = {
      xp: user.xp
    }

    return userXP;
  }
}

export { UpdateUserXPService };