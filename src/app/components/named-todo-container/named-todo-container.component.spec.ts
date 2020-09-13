import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedTodoContainerComponent } from './named-todo-container.component';

describe('NamedTodoContainerComponent', () => {
  let component: NamedTodoContainerComponent;
  let fixture: ComponentFixture<NamedTodoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedTodoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedTodoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
