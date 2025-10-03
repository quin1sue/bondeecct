"use server";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  request: NextRequest
): Promise<{ code: number; status: string } | unknown> {
  const supabase = await createClient();
  const { error } = await supabase.auth.getUser();

  const baseUrl = request.nextUrl.origin;

  if (error) {
    return NextResponse.redirect(
      new URL("/invalidate?error=invalid-domain-gmail", baseUrl)
    );
  }

  return NextResponse.redirect(new URL("/verification", baseUrl));
}
