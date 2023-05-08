import * as t from "io-ts";

export const createStatusCodec = t.type({
  name: t.string,
});
export interface ICreateStatus extends t.TypeOf<typeof createStatusCodec> {}

export const createLevelCodec = t.type({
  name: t.string,
  zone: t.string,
  price: t.number,
});
export interface ICreateLevel extends t.TypeOf<typeof createLevelCodec> {}

export const createTickeCodec = t.type({
  title: t.string,
  description: t.string,
  levelId: t.number,
  statusId: t.number,
  age: t.number,
  name: t.string,
  email: t.string,
  tel: t.string,
  startDate: t.string,
  endDate: t.string,
});
export interface ICreateTicket extends t.TypeOf<typeof createTickeCodec> {}

export const getTicketByStatusCodec = t.type({
  statusId: t.number,
});
export interface IGetTicketByStatus
  extends t.TypeOf<typeof getTicketByStatusCodec> {}

export const getTicketByIdCodec = t.type({
  ticketId: t.number,
});
export interface IGetTicketById extends t.TypeOf<typeof getTicketByIdCodec> {}

export const updateStatusTicketByIdCodec = t.type({
  ticketId: t.number,
  statusId: t.number,
});
export interface IUpdateStatusTicketById
  extends t.TypeOf<typeof updateStatusTicketByIdCodec> {}
