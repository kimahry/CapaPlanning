import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  users: User[] = [
    { firstName: 'Laurent', lastName: 'Meunier', email: 'lolo@test.com', password: '' },
    { firstName: 'Kévin', lastName: 'Monier', email: 'lolo@test.com', password: '' },
    { firstName: 'Jessica', lastName: 'Alba', email: 'lolo@test.com', password: '' },
    { firstName: 'Alex', lastName: 'Dupond', email: 'lolo@test.com', password: '' }
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  deleteUser(user: User) {
   this.users = this.users.filter((value) => value.firstName !== user.firstName);
   return this.users;
  }

}
