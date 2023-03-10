import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  //TODO: Reformular lista de tareas

  tarea1: ITask = {
    title:'Task 1',
    description: 'Description 1',
    completed: false,
    level: Levels.Info
  }

  tarea2: ITask = {
    title:'Task 2',
    description: 'Description 2',
    completed: true,
    level: Levels.Blocking
  }

  constructor(){}

  ngOnInit(): void {
    
  }

  deleteTask(task: ITask){
    alert(`Se elimina la tarea: ${task.title}`);
  }

}
