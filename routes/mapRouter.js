import express from "express";

import mapControllers from "../controllers/mapControllers.js";
const { getMap, addMap, deleteMap } = mapControllers;

import { isEmptyBody, validateBody } from "../helpers/index.js";
import { addMapSchema } from "../schemas/mapSchemas.js";

const addMapValidate = validateBody(addMapSchema);

const mapRouter = express.Router();

mapRouter.get("/", getMap);

mapRouter.post("/", isEmptyBody, addMapValidate, addMap);

mapRouter.delete("/", deleteMap);

export default mapRouter;
