import { NextResponse } from "next/server";
import _ from "lodash";
//import { buildRelationQuery } from "services/utils";
import { Category } from "@/models/category";
import { Tag } from "@/models/tag";
import { Post } from "@/models/post";
import { connectDB } from "db";

const querystr = require("node:querystring");
const models = {
  posts: Post,
  categories: Category,
  tags: Tag,
};

export async function GET(request: Request, { params }: any) {
  await connectDB();

  const resource = params.resource;

  const q = request.url?.split("?");
  const qs = q?.length === 2 ? q[1] : "";

  const queryStr = querystr.parse(qs);
  const { include } = queryStr;

  //const model = resources[resource];

  //const relations = buildRelationQuery(include, true);
  console.log(resource);
  const model = models[resource];
  console.log(params.id);

  const data = await model.findByPk(Number(params.id));

  return NextResponse.json(data);
}

export async function PATCH(request: Request, { params }: any) {
  await connectDB();

  const data = await request.json();
  const resource = params.resource;

  const { id, ...saveData } = data;

  const model = models[resource];

  await model.update(saveData, { where: { id } });

  return NextResponse.json("ok");
}
