import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const params = Object.fromEntries(searchParams.entries());

  const { token } = params;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    const response = NextResponse.redirect(new URL("/forms", req.url));
    response.cookies.set("token", token);
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/", req.url));
  }
};
