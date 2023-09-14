import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topicModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //params
  const { id } = params;
  const { newTitle: title, newBody: body } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, body });
  return NextResponse.json({ message: "Topic updated!" }, { status: 200 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
