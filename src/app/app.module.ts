import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AccountComponent } from './account/account.component';
import { CoffeeElectionStore } from './services/state/CoffeeElectionStore';

import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserService } from './services/user.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { userReducer } from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';
import { UserList2Component } from './user/user-list-2/user-list-2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    AccountComponent,
    UserListComponent,
    UserTableComponent,
    UserList2Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'users', component:UserListComponent},
      {path:'users2', component:UserList2Component},
      {path:'account', component:AccountComponent},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'**', component:PagenotfoundComponent}
    ]),
    AppRoutingModule,
    StoreModule.forRoot({users: userReducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers:[CoffeeElectionStore, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }