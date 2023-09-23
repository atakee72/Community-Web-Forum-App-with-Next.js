import connectMongoDB from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await User.create({ name, email, password: "x" });
  return NextResponse.json(
    {
      message: "(Google) user registered in the database!",
    },
    { status: 201 }
  );
}


export async function PUT(request: NextRequest) {
  const { email, firstName, surname, userPicture, roleBadge } =
    await request.json();

  await connectMongoDB();

  const addNewFields = {
    firstName,
    surname,
    userPicture,
    roleBadge,
  };

  await User.findOneAndUpdate({ email: email }, { $set: addNewFields });
  return NextResponse.json({ message: "User info updated!" }, { status: 200 });
}

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email"); // Access email from query parameters
  await connectMongoDB();
  const user = await User.findOne({ email: email });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "LOGGED USER RETRIEVED!", user },
    { status: 200 }
  );
}

