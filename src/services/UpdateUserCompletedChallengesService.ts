import { PrismaClient } from ".prisma/client";

interface IUpdateXP {
  userId: string;
  completedChallenges: number;
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

    const userCompletedChallenges = {
      completedChallenges: user.completedChallenges
    };

    return userCompletedChallenges;
  }
}

export { UpdateUserCompletedChallengesService };