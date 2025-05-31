import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url);

  const formId = url.searchParams.get("formId");

  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/form/remove-form?formId=${formId}`,
    {
      method: "DELETE",
      headers: {
        "Cookie": `token=${token};`,
      },
    }
  );

  const result = await response.json();

  revalidatePath("/forms");

  return NextResponse.json(result, {
    headers: response.headers,
    status: response.status,
  });
};
