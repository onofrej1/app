import { NextResponse } from "next/server";
import _ from "lodash";
//import { buildRelationQuery } from "services/utils";
import { Post } from "@/models/post";
import { Category } from "@/models/category";
import { Tag } from "@/models/tag";
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

  let {
    skip,
    take,
    select,
    page,
    order,
    include,
    search,
    searchFields,
    ...query
  } = queryStr;

  if (page && take) {
    page = Number(page);
    take = Number(take);
    skip = page && page > 0 ? take * (page + 1) - take : skip;
  }

  //const model = resources[resource];

  order = order instanceof Array ? order : [order];
  order = order.filter(Boolean).reduce((ord: any[], value: string) => {
    let column = value.startsWith("-") ? value.substring(1) : value;
    const direction = value.startsWith("-") ? "desc" : "asc";
    //obj = _.merge(obj, buildRelationQuery(column, direction));
    const orderBy = [column, direction];
    ord.push(orderBy);
    return ord;
  }, []);

  //const relations = buildRelationQuery(include, true);

  let where = {};
  Object.keys(query).forEach((key) => {
    let val = query[key];
    let value;
    let [searchKey, oper] = key.split("__");
    if (oper) {
      val = oper === "contains" ? `%${val}%` : value;
      value = val;
    } else if (key.includes(",")) {
      /* TODO search with 'OR' operator */
    } else {
      value = val;
    }
    //where = _.merge(where, buildRelationQuery(searchKey + "." + oper, value));
  });
  const count = 1;
  //const data = 2;
  console.log("res");
  console.log(params.resource);
  const data = await models[resource].findAll();

  return NextResponse.json({ count, results: data });
}

export async function POST(request: Request, { params }: any) {
  await connectDB();

  const data = await request.json();
  const resource = params.resource;
  const model = models[resource];

  const { id, ...saveData } = data;
  await model.create(saveData);

  return NextResponse.json("ok");
}
