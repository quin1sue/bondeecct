export enum UserRole {
  STUDENT = "STUDENT",
  FACULTY = "FACULTY",
  ADMIN = "ADMIN",
}

export enum EventStatus {
  NONE = "NONE",
  UPCOMING = "UPCOMING",
  ONGOING = "ONGOING",
  CANCELLED = "CANCELLED",
  DONE = "DONE",
}

export type DataType = {
  User: {
    id: string;
    role: UserRole;
    name: string;
    email: string;
    department: string;
    userEvents: DataType["Event"][];
    onRegisteredEvents: DataType["Event"][];
    answerRecord?: {
      id: string;
      userId: string;
      sentAt: Date;
      response: Array<{
        formSlug: string;
        answers: Array<{ question: string; answer: string }>;
      }>;
    };
  };

  Event: {
    id: string;
    slug: string;
    name: string;
    tags: string[];
    eventStatus?: EventStatus;
    authorId: string;
    createdAt: Date;
    endAt: Date | null;
    author: DataType["User"];
    registeredUsers?: DataType["User"][];
    eventForm?: Array<{
      id: string;
      formSlug: string;
      question: string;
      eventId: string;
    }>;
  };
};
