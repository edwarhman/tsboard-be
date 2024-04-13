import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks() {
    return this.tasksService.getAll();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.create(newTask);
  }
}
