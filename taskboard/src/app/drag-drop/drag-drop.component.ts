import { Component, EventEmitter, Input, Output } from '@angular/core';

import { task } from '../task';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
@Input()  task:task={  }as task;
  
  // movebox(task: task){
  //   this.task= task;
  //   console.log(this.task);
  // }
    
  movebox(task: task){
    this.task= task;
    console.log(this.task);
  }



}



