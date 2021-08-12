import { Request, Response } from "express";
import { UpdateUserLevelService } from "../services/UpdateUserLevelService";

class UpdateUserLevelController {
  async handle(request: Request, response: Response) {
    const { level } = request.body;
    const userId = request.user_id;

    const updateUserLevelService = new UpdateUserLevelService();

    const userLevel = await updateUserLevelService.execute({ userId, level });

    response.json(userLevel);
  }
}

export { UpdateUserLevelController };