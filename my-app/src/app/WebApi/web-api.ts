import { Todo } from '../model/todo';


export abstract class WebApi {
    abstract getTodos(userId: number): Todo[];
    abstract deleteTodo(userId: number);
}


