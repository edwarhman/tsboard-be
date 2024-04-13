import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.dto';
import { Task, TaskStatus } from './tasks.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 0,
      title: 'Task',
      description: 'Description',
      status: TaskStatus.OPEN,
    },
  ];
  create(createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;
    const task = {
      id: this.tasks.length,
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return 'new task created.';
  }

  getAll() {
    return this.tasks;
  }
}
