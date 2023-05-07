/*
  Warnings:

  - A unique constraint covering the columns `[ticketId]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contact_ticketId_key" ON "Contact"("ticketId");
