import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers/resolvers";
import { prisma } from "@/utils/prisma";
import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";
import { Query } from "@/utils/type";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== "production",
  csrfPrevention: true,
});
const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest): Promise<Query["Context"]> => {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    const user = data.user && !error ? data.user : null;

    return { req, user: user ?? null, isAuthenticated: !!user, prisma };
  },
});

export { handler as GET, handler as POST };
