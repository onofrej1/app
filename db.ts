import { Sequelize } from "sequelize-typescript";
import { Post } from "@/models/post";
import { Category } from "@/models/category";
import { Tag } from "@/models/tag";
import mysql2 from "mysql2";
//const { Sequelize } = require('sequelize');

export async function connectDB() {
  const sequelize = new Sequelize({
    database: "app",
    dialect: "mysql",
    dialectModule: mysql2,
    username: "root",
    password: "",
    models: [Post, Category, Tag],
  });
  //sequelize.sync();
}

//sequelize.sync({ force: true });
