import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, password }: { email: string; password: string } =
    await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/email-login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const result = await response.json();

  return NextResponse.json(result, {
    status: response.status,
    headers: response.headers,
  });
};
