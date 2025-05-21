import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/get-profile`,
    {
      method: "GET",
      headers: {
        "Cookie": `token=${token};`,
      },
    }
  );

  const result = await response.json();

  return NextResponse.json(result, {
    status: response.status,
    headers: response.headers,
  });
};
