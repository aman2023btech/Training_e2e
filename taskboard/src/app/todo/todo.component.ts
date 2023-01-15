import { Component } from '@angular/core';
import { task } from '../task'; 
import { TilesComponent } from '../tiles/tiles.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos !: task[];
  constructor(){
   
    this.todos 



  }

}
