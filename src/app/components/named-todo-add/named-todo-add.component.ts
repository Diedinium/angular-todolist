import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoContainer } from 'src/app/models/TodoContainer';
import { Utilities } from 'src/app/models/Utilities';

@Component({
  selector: 'app-named-todo-add',
  templateUrl: './named-todo-add.component.html',
  styleUrls: ['./named-todo-add.component.css']
})
export class NamedTodoAddComponent implements OnInit {
  @Output() addTodoGroup :EventEmitter<any> = new EventEmitter();
  name:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!Utilities.isBlank(this.name) && !Utilities.isWhitespace(this.name)) 
    {
      const todoGroup = {
        name: this.name,
        Todos: []
      }
      this.addTodoGroup.emit(todoGroup);
      this.name = null;
    }
    else {
      this.name = null;
    }
  }
}
