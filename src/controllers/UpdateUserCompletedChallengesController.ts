import { Request, Response } from "express";
import { UpdateUserCompletedChallengesService } from "../services/UpdateUserCompletedChallengesService";
import { UpdateUserLevelService } from "../services/UpdateUserLevelService";

class UpdateUserCompletedChallengesController {
  async handle(request: Request, response: Response) {
    const { completedChallenges } = request.body;
    const userId = request.user_id;

    const updateUserCompletedChallengesService = new UpdateUserCompletedChallengesService();

    const userCompletedChallenges = await updateUserCompletedChallengesService.execute({ userId, completedChallenges});

    response.json(userCompletedChallenges);
  }
}

export { UpdateUserCompletedChallengesController };