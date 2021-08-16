import { PrismaClient } from ".prisma/client";


interface IUserRanking {
  id: number;
  username: string;
  level: number;
  xp: number;
  completedChallenges: number;
}
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