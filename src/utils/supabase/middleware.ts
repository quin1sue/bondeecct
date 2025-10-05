import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  // returns the html error fix
  if (request.nextUrl.pathname === "/api/graphql") {
    return supabaseResponse;
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userFetch = await supabase
    .from("User")
    .select("*")
    .eq("id", user?.id)
    .single();
  const tab = request.nextUrl.searchParams.get("tab");

  //if user exists but is not verified, redirect to /?tab=verification
  if (user && !userFetch && tab !== "verification") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.set("tab", "verification");
    return NextResponse.redirect(url);
  }

  //if user is verified or no user, remove the verification tab
  if ((userFetch || !user) && tab === "verification") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.delete("tab");
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
