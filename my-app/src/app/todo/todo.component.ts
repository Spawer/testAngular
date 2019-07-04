import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo';
import { AppComponent } from 'app/app.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() {}

  // @Input() public id: number;
  // @Input() public userId: number;
  // @Input() public title: string;
  // @Input() public completed: boolean;
  @Input() public myTodo: Todo;

  @Output() public todoChange = new EventEmitter<boolean>();
  @Output() public delete = new EventEmitter<Todo>();

  public updateCompleted(event) {
    this.todoChange.emit(event.checked);
  }

  public deleteTodo(event, todo: Todo) {
    this.delete.emit(todo);
  }

  ngOnInit() {
  }
}
