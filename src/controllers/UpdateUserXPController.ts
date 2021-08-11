import { Request, Response } from "express";
import { UpdateUserXPService } from "../services/UpdateUserXPService";

class UpdateUserXPController {
  async handle(request: Request, response: Response) {
    const { userId, xp } = request.body;

    const updateUserXPService = new UpdateUserXPService();

    const user = await updateUserXPService.execute({ userId, xp });
    
    response.json(user);
  }
}

export { UpdateUserXPController };