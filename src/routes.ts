import { Router } from "express";
import {
  createLevelHandler,
  createStatusHandler,
  createTicketHandler,
  getAllLevelHandler,
  getAllStatusHandler,
  getAllTicketsHandler,
  getTicketByIdHandler,
  getTicketByStatusHandler,
  updateStatusTicketByIdHandler,
} from "./boeingland/boeingland.handler";

const router = Router();

router.post("/createStatusHandler", createStatusHandler);
router.post("/createLevelHandler", createLevelHandler);
router.post("/createTicketHandler", createTicketHandler);
router.post("/getAllTicketsHandler", getAllTicketsHandler);
router.post("/getAllLevelHandler", getAllLevelHandler);
router.post("/getTicketByStatusHandler", getTicketByStatusHandler);
router.post("/getAllStatusHandler", getAllStatusHandler);
router.post("/getTicketByIdHandler", getTicketByIdHandler);
router.post("/updateStatusTicketByIdHandler", updateStatusTicketByIdHandler);

export default router;
