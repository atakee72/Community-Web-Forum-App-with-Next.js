import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topicModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { title, body } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, body });
  return NextResponse.json({ message: "Topic created!" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted!" }, { status: 200 });
}
