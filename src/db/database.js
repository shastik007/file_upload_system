import 'dotenv/config'
import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: "127.0.0.1",
    port:process.env.POSTGRES_PORT,
    dialect: "postgres",
    logging:false,
  }
);

