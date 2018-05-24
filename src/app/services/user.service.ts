import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
// import { _throw  } from 'rxjs/Observable/throw';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class UserService {
  readonly userUrl: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/users');
  }

  deleteUser = (id: number) => {
    const url = `${this.userUrl}/posts/${id}`;
    // return this.http.delete<User>(url, httpOptions)
    //   .pipe(
    //     catchError(null)
    //   );

    return this.http.delete(url, httpOptions)
      .pipe(
        mergeMap(character => this.http.get(url, httpOptions)),
        catchError(null)
      );
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return _throw('Something bad happened; please try again later.');
  // };
}
