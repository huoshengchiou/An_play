import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() updateEvent:EventEmitter<Task>=new EventEmitter()

  text: string=''
  day:string=''
  reminder:boolean = false;
  showAddTask:boolean = false;
  subscription: Subscription=new Subscription

  constructor(private uiService:UiService) {
    this.subscription=this.uiService.onToggle().subscribe(val=>this.showAddTask=val)

   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text) {
      alert('add text')
      return
    }
    const update={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
      this.updateEvent.emit(update)


    this.text=''
    this.day=''
    this.reminder=false
  }
}
