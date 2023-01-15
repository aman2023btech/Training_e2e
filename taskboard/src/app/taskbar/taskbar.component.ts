import { Component } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent {

  display_popup(){
    let pop= document.querySelector(".popup") as HTMLElement;
    let overlay= document.querySelector(".overlay") as HTMLElement;

    overlay.classList.remove("hidden");
    pop.classList.remove("hidden");
  }

}
