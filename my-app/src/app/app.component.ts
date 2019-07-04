import { Component, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { Todo } from './model/todo';
import { OnInit } from '@angular/core';
import { WebApi } from './WebApi/web-api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

}
