import { Table, Column, Model } from "sequelize-typescript";

@Table
export class Tag extends Model {
  @Column
  title: string;
}
