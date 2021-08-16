import { Request, Response } from "express";
import { UpdateUserCurrentXPService } from "../services/UpdateUserCurrentXPService";
import { UpdateUserLevelService } from "../services/UpdateUserLevelService";

class UpdateUserCurrentXPController {
  async handle(request: Request, response: Response) {
    const { currentXP } = request.body;
    const userId = request.user_id;

    const updateUserCurrentXPService = new UpdateUserCurrentXPService();

    const userCurrentXP = await updateUserCurrentXPService.execute({ userId, currentXP });

    response.json(userCurrentXP);
  }
}

export { UpdateUserCurrentXPController };