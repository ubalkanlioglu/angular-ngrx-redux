import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html'
})
export class UserTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('users') users;

  @Output() deleteUser: EventEmitter<any> = new EventEmitter();

  delete = (id: number) => this.deleteUser.emit(id);

}
