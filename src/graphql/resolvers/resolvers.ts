import { supabaseAdmin } from "@/utils/supabase/adminclient";
import { GraphQLError } from "graphql";
import { Query } from "@/utils/type";

export const resolvers = {
  Query: {
    verifyUser: async (
      _: unknown,
      _args: unknown,
      context: Query["Context"]
    ): Promise<{ isSuccess: boolean; message: string; status: number }> => {
      if (!context.user) {
        return {
          isSuccess: false,
          message: "User not authenticated.",
          status: 401,
        };
      }

      // chec if user is already verified
      const isVerified = await context.prisma.user.findUnique({
        where: { id: context.user.id },
        select: { email: true },
      });

      if (
        context.user.email?.endsWith("@citycollegeoftagaytay.edu.ph") &&
        !isVerified
      ) {
        try {
          await context.prisma.user.upsert({
            where: { id: context.user.id },
            create: {
              id: context.user.id,
              email: context.user.email,
              name: context.user.user_metadata?.full_name ?? "Unknown",
            },
            update: {
              // do nun
            },
          });

          return { isSuccess: true, message: "Account verified!", status: 200 };
        } catch (err: unknown) {
          throw new GraphQLError("Failed to create account.", {
            extensions: { code: "FAILED_TO_CREATE_ACCOUNT" },
          });
        }
      }

      try {
        await supabaseAdmin.auth.admin.deleteUser(context.user.id);
      } catch (err) {
        console.error("Failed to delete user:", err);
      } finally {
        return {
          isSuccess: false,
          message:
            "You must use your @citycollegeoftagaytay.edu.ph to log-in. \n Redirecting you at home...",
          status: 403,
        };
      }
    },
  },
};
