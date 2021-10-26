import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((res) => {
      this.tasks = res;
    });
  }

  deleteTaskFromP(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t=>t.id!==task.id)
    });
  }

  toggleTaskFromP(task: Task): void{
    task.reminder=!task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  updateTaskFromP(task: Task): void{
    this.taskService.addTask(task).subscribe(task=>this.tasks.push(task));
  }
}
