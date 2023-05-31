import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { Task } from './task.model';

@Controller('tasks')
export class TaskController {
  private tasks: Task[] = [];

  @Get()
  getAllTasks(): Task[] {
    console.log('testesssss');
    return this.tasks;
  }

  @Post()
  createTask(@Body() task: Task): Task {
    this.tasks.push(task);
    return task;
  }

  @Put()
  updateTask(@Body() task: Task): Task {
    this.tasks.push(task);
    return task;
  }
}
