import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http'

import { Task } from '../Task';
import { TASKS } from '../mock-task';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private api='http://localhost:5000/tasks'
  constructor(private http: HttpClient) {}
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api)
  }
  deleteTask(task:Task): Observable<Task>{
    const url=`${this.api}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task:Task): Observable<Task>{
    const url=`${this.api}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions)
  }

  addTask(task:Task):Observable<Task>{
    // 只要是送data一定要有header?
    return this.http.post<Task>(this.api,task,httpOptions)
  }
}
