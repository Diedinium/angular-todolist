import { Component, OnInit } from '@angular/core';
import { TodoContainer } from 'src/app/models/TodoContainer';

@Component({
  selector: 'app-named-todo-container',
  templateUrl: './named-todo-container.component.html',
  styleUrls: ['./named-todo-container.component.css']
})
export class NamedTodoContainerComponent implements OnInit {
  todoContainer: TodoContainer[] = [];
  constructor() { }

  ngOnInit(): void {
    let temp: TodoContainer = {
      id: 0,
      name: "Test container",
      Todos: [
        { id: 1, title: "test todo 1", completed: false },
        { id: 2, title: "test todo 2", completed: false },
        { id: 3, title: "test todo 3", completed: false },
        { id: 4, title: "test todo 4", completed: false }
      ]
    }
    let temp2: TodoContainer = {
      id: 1,
      name: "Test container 2",
      Todos: [
        { id: 1, title: "test todo 1", completed: false },
        { id: 2, title: "test todo 2", completed: false },
        { id: 3, title: "test todo 3", completed: false },
        { id: 4, title: "test todo 4", completed: false }
      ]
    }
    this.todoContainer.push(temp);
    this.todoContainer.push(temp2);
  }

  addTodoGroup(todoGroup: TodoContainer) {
    let id = 0;
    if (this.todoContainer.length > 0) {
      id = this.todoContainer[this.todoContainer.length - 1].id + 1;
    }
    todoGroup.id = id;
    this.todoContainer.push(todoGroup);
  }

  deleteTodoGroup(todoGroup: TodoContainer) {
    this.todoContainer = this.todoContainer.filter(t => t.id !== todoGroup.id);
  }
}
