import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

  public users = [];

  constructor(
    public $http: HttpClient) {
  }

  getUsers(): Observable<Array<IUser>> {
    return this.users.length
      ? Observable.of(this.users)
      : this.$http.get('/assets/mocks/users-mock.json') as Observable<Array<IUser>>
      ;
  }

  getUserById(userId: string = ''): Observable<IUser> {
    return this.getUsers()
      .map(users => users.find(user => user.id === userId))
      ;
  }

}


export interface IUser {
  id: string;
  avatar: string;
  name: string;
}
