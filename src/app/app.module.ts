import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CardComponent } from './card/card.component';
import { TodoDirectivaDirective } from './todo-directiva.directive';
import { FormsModule } from '@angular/forms';
import { BPlusDirective } from './b-plus.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TodoDirectivaDirective,
    BPlusDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
