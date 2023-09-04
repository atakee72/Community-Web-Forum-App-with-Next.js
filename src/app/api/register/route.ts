import connectMongoDB from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    console.log({ Username: username, Email: email, Password: password });

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occured while registering the user!" },
      { status: 500 }
    );
  }
}
