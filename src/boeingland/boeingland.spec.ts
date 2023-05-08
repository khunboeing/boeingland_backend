import {
  createLevel,
  createStatus,
  createTicket,
  getAllTickets,
  getTicketById,
  getTicketByStatus,
} from "./boeingland.resolver";

describe("boeingland", () => {
  test("should createStatus correctly", async () => {
    const input = {
      name: "pending",
    };
    const output = await createStatus({
      name: input.name,
    });
    console.log(output);

    expect(output.name === input.name).toBe(true);
  });

  test("should createLevel correctly", async () => {
    const input = {
      name: "VVIP",
      zone: "all zone",
      price: 8000,
    };
    const output = await createLevel({
      name: input.name,
      zone: input.zone,
      price: input.price,
    });
    console.log(output);

    expect(output.name === input.name).toBe(true);
    expect(output.zone === input.zone).toBe(true);
    expect(output.price === input.price).toBe(true);
  });

  test("should createTicket correctly", async () => {
    const input = {
      title: "boeingland",
      description: "blahblah",
      levelId: 1,
      statusId: 1,
      age: 20,
      name: "boeing",
      email: "boeing@gmeow.com",
      tel: "24341",
      startDate: "14313",
      endDate: "14341",
    };
    const output = await createTicket({
      title: input.title,
      description: input.description,
      levelId: input.levelId,
      statusId: input.statusId,
      age: input.age,
      name: input.name,
      email: input.email,
      tel: input.tel,
      startDate: input.startDate,
      endDate: input.endDate,
    });
    console.log(output);

    expect(output.title === input.title).toBe(true);
    expect(output.description === input.description).toBe(true);
    expect(output.levelId === input.levelId).toBe(true);
    expect(output.statusId === input.statusId).toBe(true);
  });

  test("should getTicketByStatus correctly", async () => {
    const input = {
      statusId: 3,
    };
    const output = await getTicketByStatus({
      statusId: input.statusId,
    });
    console.log(output);

    expect(output?.statusId === input.statusId).toBe(true);
  });

  test("should getTicketById correctly", async () => {
    const input = {
      ticketId: 3,
    };
    const output = await getTicketById({
      ticketId: input.ticketId,
    });
    console.log(output);

    expect(output?.ticketId === input.ticketId).toBe(true);
  });
});
