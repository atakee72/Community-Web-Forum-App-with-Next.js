import connectMongoDB from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    console.log({ Name: name, Email: email, Password: password });

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occured while registering the user!" },
      { status: 500 }
    );
  }
}
