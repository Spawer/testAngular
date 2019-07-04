
export class Todo {
  constructor(id: number, userId: number, title: string, completed: boolean) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.completed = completed;
  }
  id: number;
  userId: number;
  title: string;
  public completed: boolean;

}
