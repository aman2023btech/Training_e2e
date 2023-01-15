import { Component } from '@angular/core';
import { task } from '../task'; 

@Component({
  selector: 'app-onhold',
  templateUrl: './onhold.component.html',
  styleUrls: ['./onhold.component.css']
})
export class OnholdComponent {

  onholds !: task[];
  constructor(){
   
    this.onholds



  }
}
