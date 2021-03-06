import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserDataController } from "./controllers/ListUserDataController";
import { ListUsersRankingController } from "./controllers/ListUsersRankingController";
import { UpdateUserCompletedChallengesController } from "./controllers/UpdateUserCompletedChallengesController";
import { UpdateUserCurrentXPController } from "./controllers/UpdateUserCurrentXPController";
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
const updateUserCurrentXPController = new UpdateUserCurrentXPController();
const listUsersRankingController = new ListUsersRankingController();

router.post("/user", createUserController.handle);

router.post("/user/authenticate", authenticateUserController.handle);

router.get("/user", ensureAuthenticateUser, listUserDataController.handle);

router.get("/users/ranking", ensureAuthenticateUser, listUsersRankingController.handle)

router.put("/user/completed-challenges", ensureAuthenticateUser, updateUserCompletedChallengesController.handle);

router.put("/user/xp", ensureAuthenticateUser, updateUserXPController.handle);

router.put("/user/level", ensureAuthenticateUser, updateUserLevelController.handle);

router.put("/user/current-xp", ensureAuthenticateUser, updateUserCurrentXPController.handle);

export { router };