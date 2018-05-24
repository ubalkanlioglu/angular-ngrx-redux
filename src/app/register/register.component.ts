import { Component, OnInit } from '@angular/core';
import { CoffeeElectionStore } from '../services/state/CoffeeElectionStore';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private store: CoffeeElectionStore) { }
  ngOnInit() {
  }

}
