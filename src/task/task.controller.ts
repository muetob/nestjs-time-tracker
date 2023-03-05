import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { IdParams } from "./IdParams";

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param() idParams: IdParams) {
    return this.taskService.findOne(idParams.id);
  }

  @Patch(':id')
  update(@Param() idParams: IdParams, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(idParams.id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param() idParams: IdParams) {
    return this.taskService.remove(idParams.id);
  }
}
