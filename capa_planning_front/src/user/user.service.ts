import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Observable } from 'rxjs/Observable';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


// We use the gql tag to parse our query string into a query document
const CurrentUserForProfile = gql`
  query {
    listUser {
      firstName
      lastName
      email
    }
  }
`;

@Injectable()
export class UserService {

  users: User[] = [
    { firstName: 'Laurent', lastName: 'Meunier', email: 'lolo@test.com', password: '' },
    { firstName: 'Kévin', lastName: 'Monier', email: 'lolo@test.com', password: '' },
    { firstName: 'Jessica', lastName: 'Alba', email: 'lolo@test.com', password: '' },
    { firstName: 'Alex', lastName: 'Dupond', email: 'lolo@test.com', password: '' }
  ];

  constructor(private apollo: Apollo) { }

  /**
   * Return all the users
   *
   * @returns {Observable<User[]>}
   * @memberof UserService
   */
  getUsers(): Observable<User[]> {
    return this.apollo.watchQuery<any>({ query: CurrentUserForProfile })
      .valueChanges
      .map(({ data }) => data.listUser);
  }

  deleteUser(user: User) {
    this.users = this.users.filter((value) => value.firstName !== user.firstName);
    return this.users;
  }

}
