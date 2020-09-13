import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NamedTodoContainerComponent } from './components/named-todo-container/named-todo-container.component';
import { NamedTodoAddComponent } from './components/named-todo-add/named-todo-add.component';
import { NamedTodoItemComponent } from './components/named-todo-item/named-todo-item.component';
import { NamedTodoAddItemComponent } from './components/named-todo-add-item/named-todo-add-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    NamedTodoContainerComponent,
    NamedTodoAddComponent,
    NamedTodoItemComponent,
    NamedTodoAddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
