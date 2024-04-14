import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    console.log({ id });
    return this.tasksService.getTaskById(+id);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body() updatedTask: Partial<CreateTaskDto>,
  ) {
    return this.tasksService.updateTask(+id, updatedTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(+id);
  }
}
