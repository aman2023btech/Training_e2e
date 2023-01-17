import { Component } from '@angular/core';
import { task } from '../task';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  task!: task;
  tasks!: task[];

  constructor() {
    this.tasks = [  {title:"task1", desc:"done"}  ];
  }

  deletetask(task: task){

    console.log(task);
    const index= this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
   }
}
