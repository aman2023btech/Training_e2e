import { Component } from '@angular/core';
import { task } from '../task';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css'],
})
export class InprogressComponent {
  task!: task;
  tasks!: task[];

  constructor() {
    this.tasks = [{title:"task2", desc:"working"}];
  }


  deletetask(task: task){

    console.log(task);
    const index= this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
   }
}
