import { Router } from "express";
import {
  createLevelHandler,
  createStatusHandler,
  createTicketHandler,
} from "./boeingland/boeingland.handler";

const router = Router();

router.post("/createStatusHandler", createStatusHandler);
router.post("/createLevelHandler", createLevelHandler);
router.post("/createTicketHandler", createTicketHandler);

export default router;
