import { PrismaClient } from ".prisma/client";

interface IUpdateXP {
  userId: string;
  currentXP: number;
}

class UpdateUserCurrentXPService {
  async execute({userId, currentXP}: IUpdateXP) {
    const prisma = new PrismaClient();

    try {
      const user = await prisma.user.update({
        where: {
          id: parseInt(userId)
        },
        data: {
          currentXP
        }
      });

      const userCurrentXP = {
      currentXP: user.currentXP
    };

    return userCurrentXP;
    } catch (err) {
      throw new Error('Fail to updated current xp user!')
    }
    
  }
}

export { UpdateUserCurrentXPService };