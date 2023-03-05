import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from './config/configuration';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./task/task.entity";

@Module({
  imports: [
    TaskModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('db.postgres.host'),
        port: +config.get('db.postgres.port'),
        username: config.get('db.postgres.user'),
        password: config.get('db.postgres.password'),
        database: config.get('db.postgres.database'),
        synchronize: true,
        autoLoadEntities: true
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
