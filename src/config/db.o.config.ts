import { DataSource } from "typeorm";
import { dbConfig } from './db.config';
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export default new DataSource({
  ...dbConfig,
  migrations: ['migrations/*{.ts,.js}'],
} as PostgresConnectionOptions);
