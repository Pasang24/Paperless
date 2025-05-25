import React from "react";
import FormCard from "./FormCard";
import { cookies } from "next/headers";

interface FormData {
  id: string;
  title: string;
  responseCount: number;
  createdAt: Date;
  updatedAt: Date | null;
}

async function FormList() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/form/my-forms`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          "Cookie": `token=${token};`,
        },
      }
    );
    const formDatas: FormData[] = await response.json();
    return (
      <div className="my-4 space-y-4">
        {formDatas?.map((formData) => (
          <FormCard formData={formData} key={formData.id} />
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
    throw new Error("There was a problem while getting your forms");
  }
}

export default FormList;
