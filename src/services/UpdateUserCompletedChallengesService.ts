import { PrismaClient } from ".prisma/client";

interface IUpdateXP {
  userId: string;
  completedChallenges: string;
}

class UpdateUserCompletedChallengesService {
  async execute({userId, completedChallenges}: IUpdateXP) {
    const prisma = new PrismaClient();

    const user = await prisma.user.update({
      where: {
        id: parseInt(userId)
      },
      data: {
        completedChallenges
      }
    });

    const userLevel = {
      level: user.level
    };

    return userLevel;
  }
}

export { UpdateUserCompletedChallengesService };