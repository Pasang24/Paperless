import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { formId, formResponse } = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/response/add-response`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formId, formResponse }),
    }
  );
  const result = await response.json();

  return NextResponse.json(result, {
    headers: response.headers,
    status: response.status,
  });
};
