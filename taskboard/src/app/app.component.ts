import { Component, Input, EventEmitter, Output } from '@angular/core';
import { task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'taskboard';
}
