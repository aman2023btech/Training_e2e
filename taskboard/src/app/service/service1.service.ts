import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  public dataObser=new Subject<Object>();

  constructor() { }

  settask(Task:task){
    this.dataObser.next(Task);
  }

  gettask(){
    return this.dataObser;
  }
}
