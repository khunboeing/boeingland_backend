import { Request, Response } from "express";
import { createLevel, createStatus, createTicket } from "./boeingland.resolver";
import { string } from "fp-ts";

export const createStatusHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await createStatus(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createLevelHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await createLevel(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createTicketHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await createTicket(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
