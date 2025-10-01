/*
  Warnings:

  - You are about to drop the column `question` on the `EventForm` table. All the data in the column will be lost.
  - Changed the type of `response` on the `AnswerRecords` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."AnswerRecords" DROP COLUMN "response",
ADD COLUMN     "response" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "public"."EventForm" DROP COLUMN "question";

-- CreateTable
CREATE TABLE "public"."Question" (
    "id" UUID NOT NULL,
    "text" VARCHAR(512) NOT NULL,
    "formId" UUID NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Question" ADD CONSTRAINT "Question_formId_fkey" FOREIGN KEY ("formId") REFERENCES "public"."EventForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
