import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV}` });
/**
 * Declaramos las conexiones de MySQL
 */

const db = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
};

export { db };
