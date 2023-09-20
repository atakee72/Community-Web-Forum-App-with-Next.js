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
  const { id, firstName, surname, userPicture, roleBadge } =
    await request.json();

  await connectMongoDB();

  const addNewFields = {
    firstName,
    surname,
    userPicture,
    roleBadge,
  };

  await User.findByIdAndUpdate({ _id: id }, { $set: addNewFields });
  return NextResponse.json({ message: "User info updated!" }, { status: 200 });
}

