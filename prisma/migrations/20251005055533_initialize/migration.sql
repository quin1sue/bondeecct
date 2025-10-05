-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'FACULTY', 'ADMIN');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('NONE', 'UPCOMING', 'ONGOING', 'CANCELLED', 'DONE');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'STUDENT',
    "name" VARCHAR NOT NULL,
    "email" TEXT NOT NULL,
    "department" TEXT NOT NULL DEFAULT 'unassigned',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL,
    "slug" VARCHAR(256) NOT NULL,
    "name" TEXT NOT NULL,
    "tags" TEXT[],
    "eventStatus" "EventStatus" NOT NULL DEFAULT 'NONE',
    "authorId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" TIMESTAMP(3),

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventForm" (
    "id" UUID NOT NULL,
    "formSlug" TEXT NOT NULL,
    "eventId" UUID NOT NULL,

    CONSTRAINT "EventForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" UUID NOT NULL,
    "text" VARCHAR(512) NOT NULL,
    "formId" UUID NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerRecords" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "response" JSONB NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnswerRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RegisteredEvents" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_RegisteredEvents_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_name_idx" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "EventForm_formSlug_key" ON "EventForm"("formSlug");

-- CreateIndex
CREATE INDEX "EventForm_formSlug_idx" ON "EventForm"("formSlug");

-- CreateIndex
CREATE UNIQUE INDEX "AnswerRecords_userId_key" ON "AnswerRecords"("userId");

-- CreateIndex
CREATE INDEX "_RegisteredEvents_B_index" ON "_RegisteredEvents"("B");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventForm" ADD CONSTRAINT "EventForm_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_formId_fkey" FOREIGN KEY ("formId") REFERENCES "EventForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerRecords" ADD CONSTRAINT "AnswerRecords_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RegisteredEvents" ADD CONSTRAINT "_RegisteredEvents_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RegisteredEvents" ADD CONSTRAINT "_RegisteredEvents_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
