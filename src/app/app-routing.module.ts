import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeElectionStore } from './services/state/CoffeeElectionStore';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
