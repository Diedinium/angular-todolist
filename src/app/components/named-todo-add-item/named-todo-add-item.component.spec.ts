import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedTodoAddItemComponent } from './named-todo-add-item.component';

describe('NamedTodoAddItemComponent', () => {
  let component: NamedTodoAddItemComponent;
  let fixture: ComponentFixture<NamedTodoAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedTodoAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedTodoAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
