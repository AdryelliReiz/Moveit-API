import { Request, Response } from "express";
import { UpdateUserXPService } from "../services/UpdateUserXPService";

class UpdateUserXPController {
  async handle(request: Request, response: Response) {
    const { xp } = request.body;
    const userId = request.user_id;

    const updateUserXPService = new UpdateUserXPService();

    const userXp = await updateUserXPService.execute({ userId, xp });
    
    response.json(userXp);
  }
}

export { UpdateUserXPController };