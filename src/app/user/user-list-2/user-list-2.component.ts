import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../models/app-state';
import { User } from '../../models/User';
import { Store } from '@ngrx/store';
import { Address } from '../../models/Address';
import { Company } from '../../models/Company';

@Component({
  selector: 'app-user-list-2',
  templateUrl: './user-list-2.component.html'
})
export class UserList2Component implements OnInit {

  users$: Observable<User[]>;
  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(state => {
      // state.users.push({
      //   id: 1, name: 'aaaaaaaa',
      //   username: 'sss',
      //   email: 'eee',
      //   address: new Address(),
      //   phone: '333',
      //   website: 'qqqqqq',
      //   company: new Company()

      // });
      return state.users
    });
  }

  ngOnInit() {
  }

}
