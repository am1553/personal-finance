import {
  clerkMiddleware,
  createRouteMatcher,
  getAuth,
} from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const publicPaths = ["/login", "/signup"];

function isPublic(pathname: string) {
  return publicPaths.find((path) => pathname.startsWith(path));
}

const isProtectedRoute = createRouteMatcher([
  "/overview",
  "/budgets",
  "pots",
  "recurring-bills",
  "transactions",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
  const { userId } = auth();
  const url = req.nextUrl.clone();
  // If the user is authenticated and trying to access the root ("/"), redirect to /overview
  if (userId && url.pathname === "/") {
    url.pathname = "/overview";
    return NextResponse.redirect(url);
  }

  // If the user is not authenticated and trying to access the root ("/"), redirect to /login
  if (!userId && url.pathname === "/") {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Continue if accessing public routes
  if (isPublic(url.pathname)) {
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
