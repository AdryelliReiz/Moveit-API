import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserDataController } from "./controllers/ListUserDataController";
import { UpdateUserLevelController } from "./controllers/UpdateUserLevelController";
import { UpdateUserXPController } from "./controllers/UpdateUserXPController";
import { ensureAuthenticateUser } from "./middlewares/EnsureAuthenticateUser";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUserDataController = new ListUserDataController();
const updateUserXPController = new UpdateUserXPController();
const updateUserLevelController = new UpdateUserLevelController();

router.post("/user", createUserController.handle);

router.post("/user/authenticate", authenticateUserController.handle);

router.get("/user", ensureAuthenticateUser, listUserDataController.handle);

router.put("/user/xp", ensureAuthenticateUser, updateUserXPController.handle);

router.put("/user/level", ensureAuthenticateUser, updateUserLevelController.handle);

export { router };