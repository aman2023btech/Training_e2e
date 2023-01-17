import { Component, EventEmitter, Input, Output } from '@angular/core';
import { task } from '../task'; 

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent {

  @Input() task!: task;
  @Output() taskdelete: EventEmitter<task>= new EventEmitter;
  @Output() tasknote: EventEmitter<task>= new EventEmitter;

  delete_task(task: task){
    this.taskdelete.emit(task);
  }

}
