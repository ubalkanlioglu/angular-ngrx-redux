import { Component, OnInit } from '@angular/core';
import { CoffeeElectionStore } from '../services/state/CoffeeElectionStore';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Candidate } from '../models/Candidate';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  candidates: Candidate[];
  constructor(private store: CoffeeElectionStore) { }
  ngOnInit() {
    this.store.state$.subscribe(s => {
      this.candidates = s.candidates;
      console.log(s.candidates)
    });
  }
  onClickLogin = () => {
    let name = Math.random().toString(36).substring(7);
    console.log(name);
    this.store.addCandidate(name);
    // let aa = [1, 2, 3, 4];
    // let a = of(aa);
    // a.subscribe(r => r.push(5));
    // console.log(aa)
  };

  onClickMutate = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json))
    // this.candidates[0] = {name:'aaa', votes: 10};
    // this.store.state$.subscribe(s => {
    //   s.candidates[0] = {name:'aaa', votes: 10};
    // });
  };
}
