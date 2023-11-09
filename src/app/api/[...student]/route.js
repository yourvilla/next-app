import { NextResponse } from "next/server";

export async function GET(req, content) {
  console.log(content);
  return NextResponse.json({ data: "Student catch all" }, { status: 200 });
}
