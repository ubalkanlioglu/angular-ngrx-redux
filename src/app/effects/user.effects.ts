import { Injectable } from "@angular/core";
import { UserService } from "../services/user.service";
import { Effect, Actions } from "@ngrx/effects";
import * as userActions from './../actions/user.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { User } from "../models/User";

@Injectable()
export class UserEffects {
    constructor(private userService: UserService, private action$: Actions) {

    }

    @Effect() loadUsers$ = this.action$.ofType(userActions.LOAD_USERS)
        .switchMap(() => this.userService.getUsers())
        .map(users => new userActions.LoadUsersSuccessAction(users));

    @Effect() deleteUsers$ = this.action$.ofType(userActions.DELETE_USER)
        .switchMap((action: userActions.DeleteUserAction) =>
            this.userService.deleteUser(action.payload)
        )
        .map((user: User) =>
            new userActions.DeleteUserSuccessAction(user.id)
        );

}