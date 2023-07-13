import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  
  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }

  @Input() todo: Todo = new Todo;
  @Input() i: number =0;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo:Todo) {
    this.todoDelete.emit(todo);
    console.log("onClick is triggered");
    }

  // ngOnInit() {
  //   console.log('TodoItemComponent:', this.todo);
  // }
  
}

