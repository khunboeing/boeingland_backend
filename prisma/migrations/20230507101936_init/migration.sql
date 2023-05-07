-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL DEFAULT now() + interval '1 days';
