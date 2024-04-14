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

  getTaskById(taskId: number) {
    return this.tasks.find((task) => task.id === taskId);
  }

  updateTask(id: number, task: Partial<CreateTaskDto>) {
    const taskToUpdate = this.getTaskById(id);
    if (taskToUpdate) {
      Object.assign(taskToUpdate, task);
      return 'task updated';
    }
    return 'task not found';
  }

  deleteTask(id: number) {
    const taskToDelete = this.getTaskById(id);
    if (taskToDelete) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      return 'task deleted';
    }
    return 'task not found';
  }
}
