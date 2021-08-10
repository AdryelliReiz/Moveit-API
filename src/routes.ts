import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserDataController } from "./controllers/ListUserDataController";
import { ensureAuthenticateUser } from "./middlewares/EnsureAuthenticateUser";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUserDataController = new ListUserDataController();

router.post("/user", createUserController.handle);

router.post("/user/authenticate", authenticateUserController.handle);

router.get("/user", ensureAuthenticateUser,listUserDataController.handle);

export { router };