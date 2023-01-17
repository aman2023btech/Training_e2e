import { Component, Input } from '@angular/core';
import { task } from '../task';
import {Service1Service} from '../service/service1.service';
import { PopupComponent } from '../popup/popup.component';
import { TilesComponent } from '../tiles/tiles.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  public tasks=[];

  constructor(private shared: Service1Service){ 

     this.shared.dataObser.subscribe((data)=>{
      console.log(data);
        this.tasks.push(<task>data);
        console.log(this.tasks);
     })
   }


   deletetask(task: task){

    console.log(task);
    const index= this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
   }
  
}
