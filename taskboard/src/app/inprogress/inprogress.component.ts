import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { task } from '../task';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css'],
})
export class InprogressComponent {
  @Input() data:string='';
  @Input() task:task;
  public tasks=[];
  @Output() tasknote: EventEmitter<task>= new EventEmitter;

  constructor() {
    this.tasks = [{title:"task2", desc:"working"}];
  }

  deletetask(task: task){
    console.log(task);
    const index= this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
   }

   movebox(task: task){
    this.tasknote.emit(task);
   }
  
  drop(){
    console.log("deepak");
    console.log(this.tasks);
    this.tasks.push(this.task);
    console.log(this.task);
   }
}
