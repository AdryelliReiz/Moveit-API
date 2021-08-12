import { PrismaClient } from ".prisma/client";

class ListUsersRankingService {
  async execute() {
    const prisma = new PrismaClient();

    const usersRanking = await prisma.user.findMany({
      orderBy: {
        xp: 'desc'
      },
      take: 20
    })

    return usersRanking;
  }
}

export { ListUsersRankingService };