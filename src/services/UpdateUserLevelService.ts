import { PrismaClient } from ".prisma/client";

interface IUpdateXP {
  userId: string;
  level: number;
}

class UpdateUserLevelService {
  async execute({userId, level}: IUpdateXP) {
    const prisma = new PrismaClient();

    const user = await prisma.user.update({
      where: {
        id: parseInt(userId)
      },
      data: {
        level
      }
    });

    const userLevel = {
      level: user.level
    };

    return userLevel;
  }
}

export { UpdateUserLevelService };