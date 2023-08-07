//import { user } from "./user";
//import { permission } from "./permission";
//import { role } from "./role";
import { Resource } from "./resources.types";
//import { eventType } from "./event_type";
//import { eventField } from "./event_field";
//import { eventTypeField } from "./event_type_field";
import { post } from "./post";
import { category } from "./category";
import { tag } from "./tag";

const resources: Resource[] = [
  //user,
  post,
  tag,
  category,
  //eventType,
  //eventField,
  //eventTypeField,
];
export { resources };
