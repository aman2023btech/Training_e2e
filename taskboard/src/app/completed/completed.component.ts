import { Component } from '@angular/core';
import { task } from '../task'; 

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {

  completeds !: task[];
  constructor(){
   
    this.completeds



  }

}
