import { registerAs } from '@nestjs/config';

export const dbConfig = {
  type: 'postgres',
  logging: true,
  host: '127.0.0.1',
  port: 7778,
  username: 'root',
  password: 'dev',
  database: 'time_tracker',
  entities: ['src/**/*.entity{ .ts,.js}'],
  migrationsTableName: 'migrations',
};

export default registerAs('database', () => {
  return {
    ...dbConfig,
    cli: {
      migrationsDir: 'migrations',
    },
  };
});
