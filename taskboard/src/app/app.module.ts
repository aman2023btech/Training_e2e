import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { TodoComponent } from './todo/todo.component';
import { CompletedComponent } from './completed/completed.component';
import { OnholdComponent } from './onhold/onhold.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { PopupComponent } from './popup/popup.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './drag-drop/drag-drop.component';


@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    TaskbarComponent,
    TodoComponent,
    CompletedComponent,
    OnholdComponent,
    InprogressComponent,
    PopupComponent,
    DragDropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
