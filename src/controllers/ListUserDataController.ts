import { Request, Response } from "express";
import { ListUserDataService } from "../services/ListUserDataService";

class ListUserDataController {
  async handle(request: Request, response: Response) {
    const userId = request.user_id;

    const listUserDataService = new ListUserDataService();

    const user = await listUserDataService.execute(userId);

    response.json(user);
  }
}

export { ListUserDataController };