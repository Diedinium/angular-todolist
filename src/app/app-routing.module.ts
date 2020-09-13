import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from 'src/app/components/todos/todos.component'
import { AboutComponent } from 'src/app/components/pages/about/about.component'
import { NamedTodoContainerComponent } from 'src/app/components/named-todo-container/named-todo-container.component'


const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'About', component: AboutComponent},
  { path: 'AdvTodo', component: NamedTodoContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
