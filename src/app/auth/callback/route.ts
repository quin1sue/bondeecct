"use server";
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/utils/prisma";
import { supabaseAdmin } from "@/utils/supabase/adminclient";
export async function GET(req: Request) {
  const supabase = await createClient();

  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();

  if (getUserError || !user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // DOMAIN CHECK
  if (!user.email?.endsWith("@citycollegeoftagaytay.edu.ph")) {
    // logout user if invalid domain
    await supabaseAdmin.auth.admin.deleteUser(user.id);
    return NextResponse.redirect(
      new URL("/unauthorized?error=invalid-domain-gmail", req.url)
    );
  }

  try {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {}, // do nothing if exists
      create: {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.full_name || "",
      },
    });

    // Success: redirect to homepage
    return NextResponse.redirect(new URL("/events", req.url));
  } catch (err) {
    console.error("failed to create user", err);

    return NextResponse.redirect(
      new URL("/unauthorized?error=failed-to-create-user", req.url)
    );
  }
}
