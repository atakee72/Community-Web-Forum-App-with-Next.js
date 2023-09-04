import connectMongoDB from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("User:", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
  }
}
