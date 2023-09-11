import connectMongoDB from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, email } = await request.json();
  await connectMongoDB();
  await User.create({ username, email, password: "x" });
  return NextResponse.json(
    {
      message: "(Google) user registered in the database!",
    },
    { status: 201 }
  );
}
