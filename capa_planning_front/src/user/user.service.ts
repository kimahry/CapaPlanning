import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MatPaginator, MatSort } from '@angular/material';
// rxjs
import { Observable } from 'rxjs/Observable';
// App
import { User } from './model/user';
import { AppPaginator } from '../shared/table/app-paginator';
import { AppSort } from '../shared/table/app-sort';

// We use the gql tag to parse our query string into a query document
const listUserQuery = gql`
  query ($paginator: Paginator, $sort: Sort, $pattern: String) {
    listUser(paginator: $paginator, pattern: $pattern, sort: $sort) {
      id
      lastName
      firstName
      email
    }
    countUser(pattern: $pattern)
  }
`;

const deleteUserQuery = gql`

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
   * @param {AppPaginator} paginator
   * @param {AppSort} sort
   * @param {String} pattern
   * @returns {Observable<any>}
   * @memberof UserService
   */
  getUsers(paginator: AppPaginator, sort: AppSort, pattern: String): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: listUserQuery,
      variables: { paginator: paginator, sort: sort, pattern: pattern }
    }).valueChanges.map(({ data }) => data);
  }

  /**
   * Delete the given user
   *
   * @param {User} user
   * @returns {Observable<any>}
   * @memberof UserService
   */
  deleteUser(user: User) {
    return this.apollo.watchQuery<any>({
      query: deleteUserQuery,
      variables: {}
    }).valueChanges.map(({ data }) => data);
    // this.users = this.users.filter((value) => value.firstName !== user.firstName);
  }

}
