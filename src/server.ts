import express from "express";
import cors from "cors";
import { router } from "./routes";

const api = express();

api.use(cors());
api.use(express.json());
api.use(router)

api.listen("3333", () => console.log("Server is running in port 3333!!!"));