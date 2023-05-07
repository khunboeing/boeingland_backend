/*
  Warnings:

  - You are about to drop the column `contactId` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `ticketId` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_contactId_fkey";

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "ticketId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "contactId";

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("ticketId") ON DELETE RESTRICT ON UPDATE CASCADE;
