import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const publicRoutes = [
  "/",
  "/login",
  "/signup",
  "/api/auth/login",
  "api/auth/oAuth",
  "api/auth/signup",
];
const protectedRoutes = ["/forms", "/create-form", "api/auth/logout"];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const currentRoute = req.nextUrl.pathname;

  const isPublicRoute =
    currentRoute === "/" ||
    publicRoutes.some(
      (route) => currentRoute.startsWith(route) && route !== "/"
    );

  const isProtectedRoute = protectedRoutes.some((route) =>
    currentRoute.startsWith(route)
  );

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token) {
    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    } catch (error) {
      console.log(error);
      const response = NextResponse.redirect(new URL("/login", req.url));
      response.cookies.delete("token");

      return response;
    }
  }

  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/forms", req.url));
  }

  return NextResponse.next();
}
