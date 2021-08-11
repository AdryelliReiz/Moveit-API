import { Request, Response } from "express";
import { UpdateUserCompletedChallengesService } from "../services/UpdateUserCompletedChallengesService";
import { UpdateUserLevelService } from "../services/UpdateUserLevelService";

class UpdateUserCompletedChallengesController {
  async handle(request: Request, response: Response) {
    const { userId, completedChallenges } = request.body;

    const updateUserCompletedChallengesService = new UpdateUserCompletedChallengesService();

    const userLevel = await updateUserCompletedChallengesService.execute({ userId, completedChallenges});

    response.json(userLevel);
  }
}

export { UpdateUserCompletedChallengesController };