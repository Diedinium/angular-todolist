import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoContainer } from 'src/app/models/TodoContainer';
import { Utilities } from 'src/app/models/Utilities';

@Component({
  selector: 'app-named-todo-add-item',
  templateUrl: './named-todo-add-item.component.html',
  styleUrls: ['./named-todo-add-item.component.css']
})
export class NamedTodoAddItemComponent implements OnInit {
  todoTitle: string;
  @Output() deleteTodoGroup :EventEmitter<TodoContainer> = new EventEmitter();
  @Output() addTodoToGroup :EventEmitter<string> = new EventEmitter();
  @Input() todoContainerItem:TodoContainer;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!Utilities.isBlank(this.todoTitle) && !Utilities.isWhitespace(this.todoTitle)) {
      this.addTodoToGroup.emit(this.todoTitle);
    }
  }

  onDelete(): void {
    //console.log(this.todoContainerItem);
    this.deleteTodoGroup.emit(this.todoContainerItem);
  }
}
