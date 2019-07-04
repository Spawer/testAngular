import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListComponent } from './list/list.component';
import { WebApi } from './WebApi/web-api';
import { MockWebApiService } from './WebApi/mock-web-api.service';
import { TodosComponent } from './todos/todos.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ListComponent,
    TodosComponent,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [{provide: WebApi, useClass: MockWebApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
