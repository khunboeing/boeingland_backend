import { Request, Response } from "express";
import {
  createLevel,
  createStatus,
  createTicket,
  getAllLevel,
  getAllStatus,
  getAllTickets,
  getTicketById,
  getTicketByStatus,
  updateStatusTicketById,
} from "./boeingland.resolver";
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

export const getAllTicketsHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllTickets();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getAllStatusHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllStatus();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getAllLevelHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllLevel();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getTicketByStatusHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await getTicketByStatus(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const getTicketByIdHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await getTicketById(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const updateStatusTicketByIdHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await updateStatusTicketById(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
