import { Component, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TodoComponent } from '../todo/todo.component';
import { task } from '../task';
import {Service1Service} from '../service/service1.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent {
  tasktitle:string='';
  taskdesc:string='';
  Task!: task;
  constructor(private shared: Service1Service){  }

  Submit_task(){
    let pop= document.querySelector(".popup")as any;
    let overlay= document.querySelector(".overlay")as any;
    overlay.classList.add("hidden");
    pop.classList.add("hidden");

    // let title = document.getElementById('Task_Title')as any;
    // let desc= document.querySelector("#Task_description") as any;
    // console.log(title.value);
    // console.log(desc.value);
  }

  hide_popup(){
    let pop= document.querySelector(".popup") as HTMLElement;
    let overlay= document.querySelector(".overlay") as HTMLElement;
    
    overlay.classList.add("hidden");
    pop.classList.add("hidden");
  }
  
  setValue(tasktitle:string, taskdesc:string) {
    this.Task= {title: tasktitle, desc: taskdesc};
    this.shared.settask(this.Task)
    console.log(this.Task);
  }

}
