import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../models/app-state';
import { Store } from '@ngrx/store';

import * as userActions from "./../../actions/user.actions";
import { User } from '../../models/User';
import { Actions } from '@ngrx/effects';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(state => state.users);
  }
  ngOnInit() {
    //this.getUsers();
  }

  getUsers = () => {
    this.store.dispatch(new userActions.LoadUsersAction())
  }

  deleteUser = (userId: number) => {
    this.store.dispatch(new userActions.DeleteUserAction(userId));
  }



}
