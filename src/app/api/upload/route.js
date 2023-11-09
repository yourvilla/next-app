import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
  //
  const data = await req.formData();
  const file = data.get("file");
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  writeFile(`./public/${file.name}`, buffer);
  return NextResponse.json({ data: "Uploaded" }, { status: 200 });
}
