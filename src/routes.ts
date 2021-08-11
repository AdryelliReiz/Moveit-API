import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserDataController } from "./controllers/ListUserDataController";
import { UpdateUserCompletedChallengesController } from "./controllers/UpdateUserCompletedChallengesController";
import { UpdateUserLevelController } from "./controllers/UpdateUserLevelController";
import { UpdateUserXPController } from "./controllers/UpdateUserXPController";
import { ensureAuthenticateUser } from "./middlewares/EnsureAuthenticateUser";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUserDataController = new ListUserDataController();
const updateUserXPController = new UpdateUserXPController();
const updateUserLevelController = new UpdateUserLevelController();
const updateUserCompletedChallengesController = new UpdateUserCompletedChallengesController();

router.post("/user", createUserController.handle);

router.post("/user/authenticate", authenticateUserController.handle);

router.get("/user", ensureAuthenticateUser, listUserDataController.handle);

router.put("/user/completed-challenges", ensureAuthenticateUser, updateUserCompletedChallengesController.handle);

router.put("/user/xp", ensureAuthenticateUser, updateUserXPController.handle);

router.put("/user/level", ensureAuthenticateUser, updateUserLevelController.handle);

export { router };