import { Request, Response } from "express";
import { getPeople } from "./person.service.ts";

export const getPeopleController = async (
  req: Request,
  res: Response
) => {
  const people = await getPeople();

  res.status(200).json({
    success: true,
    data: people,
  });
};