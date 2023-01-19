import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { task } from '../task';
import { Service1Service } from '../service/service1.service';
import { PopupComponent } from '../popup/popup.component';
import { TilesComponent } from '../tiles/tiles.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() data: string = '';
  @Input() task: task;
  public tasks = [{title:"task new", desc:"just begun"}];
  @Output() tasknote: EventEmitter<task> = new EventEmitter();

  constructor(private shared: Service1Service) {
    this.shared.dataObser.subscribe((data) => {
      //console.log(data);
      this.tasks.push(<task>data);
      // console.log(this.tasks);
    });
  }

//   push= function() {
//     console.log('deepak');
//     this.tasks.push(this.task);
//   }

//  add= this.push.bind(this);

//   target= document.querySelector(".target").addEventListener("drop", this.add);

  deletetask(task: task) {
    console.log(task);
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  movebox(task: task) {
    this.tasknote.emit(task);
  }

  allowDrop(ev:Event) {
    ev.preventDefault();
    console.log(ev);
    this.tasks.push(this.task);
    console.log('deepak');
  }

  // drop(ev) {
  //   ev.preventDefault();
  //   var data = ev.dataTransfer.getData("text");
  //   ev.target.appendChild(document.getElementById(data));
  //   this.tasks.push(this.task1);
  //   console.log('deepak');
  // }

  // drop() {
  //   console.log('deepak');
  //   console.log(this.tasks);
  //   this.tasks.push(this.task1);
  //   console.log(this.task1);
  // }
}
