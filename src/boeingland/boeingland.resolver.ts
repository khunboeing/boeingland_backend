//1

import { PrismaClient } from "../../prisma/client";
export const prisma = new PrismaClient();

export const createStatus = (args: { name: string }) =>
  prisma.status.create({
    data: {
      name: args.name,
    },
  });

export const createLevel = (args: { name: string; zone: string }) =>
  prisma.level.create({
    data: {
      name: args.name,
      zone: args.zone,
    },
  });

export const createTicket = (args: {
  title: string;
  description: string;
  levelId: number;
  statusId: number;
  age: number;
  name: string;
  email: string;
  tel: string;
}) =>
  prisma.ticket.create({
    data: {
      title: args.title,
      description: args.description,
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
      Contact: {
        create: {
          name: args.name,
          age: args.age,
          email: args.email,
          tel: args.tel,
        },
      },
    },
  });
