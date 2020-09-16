import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoContainer } from 'src/app/models/TodoContainer';

@Component({
  selector: 'app-named-todo-item',
  templateUrl: './named-todo-item.component.html',
  styleUrls: ['./named-todo-item.component.css']
})
export class NamedTodoItemComponent implements OnInit {
  @Input() todoContainerItem:TodoContainer;
  @Output() deleteTodoGroupTest :EventEmitter<TodoContainer> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(TodoGroup: TodoContainer): void {
    this.deleteTodoGroupTest.emit(TodoGroup);
  }

  deleteTodoFromList(todo :Todo) {
    this.todoContainerItem.Todos = this.todoContainerItem.Todos.filter(x => x.id != todo.id);
  }

  createTodo(todoTitle: string): void {
    console.log(todoTitle);
    let idToAdd = 1;
    if (this.todoContainerItem.Todos.length > 0) {
      idToAdd = this.todoContainerItem.Todos[this.todoContainerItem.Todos.length - 1].id + 1;
    }
    let todoToAdd :Todo = {
      id: idToAdd,
      title: todoTitle,
      completed: false
    }
    console.log(idToAdd);
    this.todoContainerItem.Todos.push(todoToAdd);
  }
}
