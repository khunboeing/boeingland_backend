//1

import { PrismaClient } from "../../prisma/client";
import {
  ICreateLevel,
  ICreateStatus,
  ICreateTicket,
  IGetTicketById,
  IGetTicketByStatus,
  IUpdateStatusTicketById,
} from "./boeingland.interface";
export const prisma = new PrismaClient();

export const createStatus = (args: ICreateStatus) =>
  prisma.status.create({
    data: {
      name: args.name,
    },
  });

export const createLevel = (args: ICreateLevel) =>
  prisma.level.create({
    data: {
      name: args.name,
      zone: args.zone,
      price: args.price,
    },
  });

export const createTicket = (args: ICreateTicket) =>
  prisma.ticket.create({
    data: {
      title: args.title,
      description: args.description,
      startDate: args.startDate,
      endDate: args.endDate,
      level: {
        connect: {
          levelId: args.levelId,
        },
      },
      status: {
        connect: {
          statusId: args.statusId,
        },
      },
      contact: {
        create: {
          name: args.name,
          age: args.age,
          email: args.email,
          tel: args.tel,
        },
      },
    },
  });

export const getAllTickets = () =>
  prisma.ticket.findMany({
    include: {
      contact: true,
      level: true,
      status: true,
    },
  });

export const getAllLevel = () => prisma.level.findMany({});

export const getAllStatus = () => prisma.status.findMany({});

export const getTicketByStatus = (args: IGetTicketByStatus) =>
  prisma.status.findUnique({
    where: {
      statusId: args.statusId,
    },
    include: {
      Ticket: {
        include: {
          contact: true,
          level: true,
          status: true,
        },
      },
    },
  });

export const getTicketById = (args: IGetTicketById) =>
  prisma.ticket.findUnique({
    where: {
      ticketId: args.ticketId,
    },
    include: {
      contact: true,
      level: true,
      status: true,
    },
  });

export const updateStatusTicketById = (args: IUpdateStatusTicketById) =>
  prisma.ticket.update({
    data: {
      statusId: args.statusId,
    },
    where: {
      ticketId: args.ticketId,
    },
  });
