import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers/resolvers";
import { prisma } from "@/utils/prisma";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== "production",
  csrfPrevention: true,
});

export const handler = startServerAndCreateNextHandler(server, {
  context: async () => ({ prisma }),
});

export { handler as GET, handler as POST };
