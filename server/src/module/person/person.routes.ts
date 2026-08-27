import { Router } from "express";
import { asyncHandler } from "../../middleware/asyncHandler.ts";
import { getPeopleController } from "./person.controller.ts";

const personRouter = Router();

personRouter.get( "/", asyncHandler(getPeopleController)
);

export default personRouter;