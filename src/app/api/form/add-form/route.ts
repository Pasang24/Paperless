import { Form } from "@/types/form";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { title, description = "", formSchema }: Form = await req.json();

  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/form/add-form`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `token=${token};`,
      },
      body: JSON.stringify({ title, description, formSchema }),
    }
  );

  const result = await response.json();

  revalidatePath("/forms");

  return NextResponse.json(result, {
    status: response.status,
    headers: response.headers,
  });
};
