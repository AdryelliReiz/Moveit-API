import { Request, Response } from "express";
import { ListUsersRankingService } from "../services/ListUsersRankingService";

class ListUsersRankingController {
  async handle(request: Request, response: Response) {
    const listUsersRankingService = new ListUsersRankingService();

    const usersRanking = await listUsersRankingService.execute();

    response.json(usersRanking);
  }
}

export { ListUsersRankingController };