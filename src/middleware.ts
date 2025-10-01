import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = await updateSession(request);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user && !user.email?.endsWith("@citycollegeoftagaytay.edu.ph")) {
    await supabase.auth.signOut();
    const url = request.nextUrl.clone();
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
