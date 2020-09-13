import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoContainer } from '../models/TodoContainer';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoManagerService {

  constructor() { }
}
