import connectDB from "@/app/lib/mongodb";
import UserProfileModel from "@/app/models/userProfileModel";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  const { fullname, email, message } = await req.body;

  // console.log("Requests:", fullname, email, message);

  try {
    await connectDB();
    await UserProfileModel.create({ fullname, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully!"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log("list of errors >>>>", errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json(error);
    }
  }

  // return NextResponse.json({ msg: ["Hi from the route!"] });
}
