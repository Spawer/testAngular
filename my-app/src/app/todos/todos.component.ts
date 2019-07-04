import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/model/todo';
import { WebApi } from 'app/WebApi/web-api';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoTable = new Array<Todo>();
  nbCompleted: number;
  todos: Todo[];
  userId = 89;

  constructor(private api: WebApi) {

  }

  ngOnInit() {
    this.todoTable.push(new Todo(88, 89, 'title 1', true));
    this.todoTable.push(new Todo(98, 99, 'title 2', false));
    this.todoTable.push(new Todo(68, 69, 'title 3', false));
    this.todoTable.push(new Todo(58, 59, 'title 4', true));
    this.todoTable.push(new Todo(48, 49, 'title 5', true));
    this.todos = this.api.getTodos(this.userId);
  }

  
  // getNbCompleted() {
  //   const result = this.todoTable.filter(todo => todo.completed === true);
  //   this.nbCompleted = result.length;
  //   return this.nbCompleted;
  // }
  // updateCompleted(event, todo: Todo){
  //   todo.completed = event;
  // }
  public deleteTodo(event: Todo) {
    // this.todoTable.splice(event, 1); marche pas avec le ngOnChange, besoin de l'index pour fonctionner
    // this.todoTable = this.todoTable.filter(todo => todo !== event);
    this.api.deleteTodo(event.id);
    this.todos = this.api.getTodos(this.userId);

  }

}
