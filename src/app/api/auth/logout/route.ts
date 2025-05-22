import { NextResponse } from "next/server";

export const GET = () => {
  const response = NextResponse.json({ messge: "Logged out successfully" });
  response.cookies.delete("token");
  return response;
};
