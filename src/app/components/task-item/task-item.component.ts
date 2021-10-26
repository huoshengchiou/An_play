import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteTaskEvent: EventEmitter<Task>=new EventEmitter()
  @Output() onToggleEvent: EventEmitter<Task>=new EventEmitter()

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task:Task){
    this.deleteTaskEvent.emit(task)
  }

  onToggle(task:Task){
    console.log('ok')
     this.onToggleEvent.emit(task)
  }
}
