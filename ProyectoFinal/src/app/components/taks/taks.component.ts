import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-taks',
  templateUrl: './taks.component.html',
  styleUrls: ['./taks.component.scss']
})
export class TaksComponent implements OnInit{

  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor(){}

  ngOnInit(): void {
    
  }

  deleteTask(){
    console.log('Eliminar tarea', this.task?.title);
    this.delete.emit(this.task); //Notificamos al componente padre, la tarea a eliminar
  }

}
