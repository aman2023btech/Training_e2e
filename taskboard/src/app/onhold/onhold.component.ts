import { Component } from '@angular/core';
import { task } from '../task';

@Component({
  selector: 'app-onhold',
  templateUrl: './onhold.component.html',
  styleUrls: ['./onhold.component.css'],
})
export class OnholdComponent {
  task!: task;
  tasks!: task[];

  constructor() {
    this.tasks = [ {title:"task", desc:"will do later"} ];
  }

  deletetask(task: task){

    console.log(task);
    const index= this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
   }
}
//
// scp 3rdpartylicenses.txt  favicon.ico  index.html  main.032b01dfd49bf785.js  polyfills.eb8460823cfec5f6.js  runtime.ac72ab4f73d8e02d.js  styles.ef46db3751d8e999.css awakening@216.48.180.112:/home/awakening/public_html/aman
