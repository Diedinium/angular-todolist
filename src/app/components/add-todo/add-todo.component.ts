import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo :EventEmitter<any> = new EventEmitter();
  
  title: string;
  alertDismissed: boolean;

  constructor() { }

  ngOnInit(): void {
    this.alertDismissed = (localStorage.getItem("alertDismissed") == "true");
  }

  dismissAlert() {
    localStorage.setItem("alertDismissed", "true");
  }

  alertVisibility() {
    let classes = {
      'd-none': this.alertDismissed
    };

    return classes;
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
    this.title = null;
  }
}
