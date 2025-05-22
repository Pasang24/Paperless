import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/email-register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, provider: "email" }),
    }
  );

  const result = await response.json();

  return NextResponse.json(result, {
    status: response.status,
    headers: response.headers,
  });
};
