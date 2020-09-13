import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedTodoItemComponent } from './named-todo-item.component';

describe('NamedTodoItemComponent', () => {
  let component: NamedTodoItemComponent;
  let fixture: ComponentFixture<NamedTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedTodoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
