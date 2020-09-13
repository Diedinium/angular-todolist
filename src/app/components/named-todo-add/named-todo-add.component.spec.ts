import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedTodoAddComponent } from './named-todo-add.component';

describe('NamedTodoAddComponent', () => {
  let component: NamedTodoAddComponent;
  let fixture: ComponentFixture<NamedTodoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedTodoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedTodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
