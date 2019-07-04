import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Todo } from 'app/model/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() public todos: Todo[];

  @Output() public delete = new EventEmitter<Todo>();

  ngOnInit() {
  }

  ngOnChanges(changedInputs: SimpleChanges) {
    for (let todos in changedInputs) {
      if (changedInputs.hasOwnProperty(todos)) {
        console.log(123);
        let input = changedInputs[todos];
        let messageParam = { current: (input.currentValue as Todo[]), previous: (input.previousValue as Todo[]) };

        if (messageParam.previous !== undefined) {
          let titleC = messageParam.previous.map(t => t.title).reduce((acc, cur) => acc + ' ' + cur);
          console.log(`Previously the todo table had : ${titleC}`);
        }
        if (messageParam.current.length > 0) {
          let titleC = messageParam.current.map(t => t.title).reduce((acc, cur) => acc + ' ' + cur);
          console.log(`Now the todo table has : ${titleC}`);
        }
      }



    }
  }

  getNbCompleted(todoTable) {
    const result = todoTable.filter(todo => todo.completed === true);
    const nbCompleted = result.length;
    return nbCompleted;
  }
  updateCompleted(event, todo: Todo) {
    todo.completed = event;
  }
  public deleteTodo(event) {
    console.log('todo deleted');

    this.delete.emit(event);
  }
}
