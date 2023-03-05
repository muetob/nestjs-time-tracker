import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./task.entity";

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Task])
  ],
})
export class TaskModule {}
