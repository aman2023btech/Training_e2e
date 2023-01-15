import { Component } from '@angular/core';
import { task } from '../task'; 

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent {

   inprogress1 !: task[];
   constructor(){
   
    this.inprogress1



  }

}
