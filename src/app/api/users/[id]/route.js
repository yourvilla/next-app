import { NextResponse } from "next/server";
import { userList } from "../../../../../utils/db";
import { User } from "@/db/models/user";
// var ObjectId = require('mongoose').Types.ObjectId;

export async function GET(req, content) {
  // console.log(content.params.id);
  // const id=new ObjectId(content.params.id)
  const data = await User.findById(content.params.id);

  return NextResponse.json({ data: data }, { status: 200 });
}

export async function PUT(req, content) {
  const id = content.params.id;
  const filter = { _id: id };
  const reqBody = await req.json();

  await User.findByIdAndUpdate(filter, reqBody);
  return NextResponse.json({ data: reqBody }, { status: 200 });
}

export async function DELETE(req, content) {
  const id = content.params.id;
  const filter = { _id: id };

  await User.deleteOne(filter);
  return NextResponse.json({ data: "Deleted" }, { status: 200 });
}
