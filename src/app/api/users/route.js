import { NextResponse } from "next/server";
import { userList } from "../../../../utils/db";
import { User } from "@/db/models/user";

export async function GET() {
  const data = await User.find();
  return NextResponse.json({ data: data }, { status: 200 });
}

export async function POST(req) {
  //
  const reqBody = await req.json();
  console.log(reqBody, "DATA");
  const user = new User(reqBody);
  await user.save();
  return NextResponse.json({ data: reqBody }, { status: 200 });
}


