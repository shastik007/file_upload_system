import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";


const FilesEntity = sequelize.define(
  "files",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: {
      type: DataTypes.STRING,
    },
    mimetype: {
      type: DataTypes.STRING,
    },
    size: {
        type: DataTypes.INTEGER,
      },
  },
  {
    timestamps: false,
  }
);

await FilesEntity.sync({ alter: true })

export default FilesEntity

