"use client";
import { createClient } from "@/utils/supabase/client";

export const signInWithGoogle = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/api/auth/redirect`, //route.ts server callback
    },
  });

  if (error) console.error("Google sign-in error:", error.message);
};

export const signOut = async (): Promise<{
  status: number;
  response: string;
}> => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut({ scope: "global" });
  if (error) {
    return {
      status: 200,
      response: "OK: Successfully logged out",
    };
  } else {
    return {
      status: 400,
      response: "Bad Request: Failed to log out.",
    };
  }
};
