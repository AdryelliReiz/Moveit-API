import { PrismaClient } from ".prisma/client";

class ListUserDataService {
  async execute(user_id: string) {
    const prisma = new PrismaClient();

    const userFind = await prisma.user.findFirst({
      where: {
        id: parseInt(user_id)
      }
    });

    if (!userFind) {
      throw new Error("User not found")
    }

    const user = {
      username: userFind.username,
      completedChallenges: userFind.completedChallenges,
      level: userFind.level,
      xp: userFind.xp
    }

    return user;
  }
}

export { ListUserDataService };