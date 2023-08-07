import { connectDB } from "db";
import { NextResponse } from "next/server";
//import "reflect-metadata";
import { Post } from "@/models/post";
import { Category } from "@/models/category";
import { Tag } from "@/models/tag";

export async function GET() {
  await connectDB();

  /*await Post.create({
    title: "First post",
    body: "First post body",
  });

  await Category.create({
    name: "First category",
  });

  await Tag.create({
    title: "First tag",
  });*/

  const posts = await Post.findAll();

  return NextResponse.json(posts);
}
