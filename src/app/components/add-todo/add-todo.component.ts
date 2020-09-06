import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
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
}
