import { Injectable } from '@angular/core';
import { Todo } from 'app/model/todo';
import { WebApi } from './web-api';

const todos = new Array<Todo>();

@Injectable(

)
export class MockWebApiService extends WebApi {

  getTodos(userId: number): Todo[] {
    let todosById = new Array<Todo>();
    for (const todo of todos) {
      if (todo.userId === userId ) {
        todosById.push(todo);
      }
    }
    return todosById;
  }
  deleteTodo(id: number) {
    todos.splice(todos.findIndex(t => t.id === id), 1);
    // supprime le todo d'un utilisateur
  }

  constructor() {
    super();
    todos.push(new Todo(88, 89, 'title 1', true));
    todos.push(new Todo(98, 89, 'title 2', false));
    todos.push(new Todo(68, 89, 'title 3', false));
    todos.push(new Todo(58, 89, 'title 4', true));
    todos.push(new Todo(48, 89, 'title 5', true));
    todos.push(new Todo(88, 1, 'title 12', true));
    todos.push(new Todo(98, 1, 'title 22', false));
    todos.push(new Todo(68, 1, 'title 32', false));
    todos.push(new Todo(58, 1, 'title 42', true));
    todos.push(new Todo(48, 1, 'title 52', true));
  }
}
