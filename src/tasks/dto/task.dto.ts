import { TaskStatus } from '../tasks.entity';

export class CreateTaskDto {
  title: string;
  description: string;
  status?: TaskStatus;
}
