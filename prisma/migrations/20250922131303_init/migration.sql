-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('STUDENT', 'FACULTY', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."EventStatus" AS ENUM ('NONE', 'UPCOMING', 'ONGOING', 'CANCELLED', 'DONE');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" UUID NOT NULL,
    "role" "public"."UserRole" NOT NULL DEFAULT 'STUDENT',
    "name" VARCHAR NOT NULL,
    "email" TEXT NOT NULL,
    "department" TEXT NOT NULL DEFAULT 'unassigned',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Event" (
    "id" UUID NOT NULL,
    "slug" VARCHAR(256) NOT NULL,
    "name" TEXT NOT NULL,
    "tags" TEXT[],
    "eventStatus" "public"."EventStatus" NOT NULL DEFAULT 'NONE',
    "authorId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" TIMESTAMP(3),

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EventForm" (
    "id" UUID NOT NULL,
    "formSlug" TEXT NOT NULL,
    "question" VARCHAR(512) NOT NULL,
    "eventId" UUID NOT NULL,

    CONSTRAINT "EventForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AnswerRecords" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "response" JSONB[],
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnswerRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_RegisteredEvents" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_RegisteredEvents_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_name_idx" ON "public"."User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "public"."Event"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "EventForm_formSlug_key" ON "public"."EventForm"("formSlug");

-- CreateIndex
CREATE INDEX "EventForm_formSlug_idx" ON "public"."EventForm"("formSlug");

-- CreateIndex
CREATE UNIQUE INDEX "AnswerRecords_userId_key" ON "public"."AnswerRecords"("userId");

-- CreateIndex
CREATE INDEX "_RegisteredEvents_B_index" ON "public"."_RegisteredEvents"("B");

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventForm" ADD CONSTRAINT "EventForm_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnswerRecords" ADD CONSTRAINT "AnswerRecords_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_RegisteredEvents" ADD CONSTRAINT "_RegisteredEvents_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_RegisteredEvents" ADD CONSTRAINT "_RegisteredEvents_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
