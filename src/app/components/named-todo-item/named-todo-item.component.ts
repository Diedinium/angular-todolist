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
  @Output() deleteTodoGroup :EventEmitter<TodoContainer> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.deleteTodoGroup.emit(this.todoContainerItem);
  }

  deleteTodo() {

  }
}
