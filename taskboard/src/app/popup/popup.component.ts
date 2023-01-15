import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  Submit_task(){
    let pop= document.querySelector(".popup") as HTMLElement;
    let overlay= document.querySelector(".overlay") as HTMLElement;
    
    overlay.classList.add("hidden");
    pop.classList.add("hidden");
  }

  hide_popup(){
    let pop= document.querySelector(".popup") as HTMLElement;
    let overlay= document.querySelector(".overlay") as HTMLElement;
    
    overlay.classList.add("hidden");
    pop.classList.add("hidden");
  }
  
}
