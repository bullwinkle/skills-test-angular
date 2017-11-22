import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

  public users: IUser[] = [];

  constructor(
    public $http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.users.length
      ? Observable.of(this.users)
      : this.$http.get<IUser[]>('/assets/mocks/users-mock.json');
  }

}


export interface IUser {
  id: string;
  avatar: string;
  name: string;
}
