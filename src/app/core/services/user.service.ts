import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getAvatarUrlById (userId: string): string {
    // TODO use userId in url template
    return `http://lorempixel.com/100/100/people/`;
  }

}
