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

const createUserMutation = gql`
  mutation ($user: UserInput!) {
    createUser(user: $user) {
      user {
        id
        firstName
        lastName
        email
      }
      errors {
        key
        msg
      }
    }
  }
`;

const deleteUserMutation = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id)
  }
`;

@Injectable()
export class UserService {

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
   * Create the user
   *
   * @param {User} user
   * @returns {Observable<any>}
   * @memberof UserService
   */
  createUser(user: User) {
    return this.apollo.mutate({
      mutation: createUserMutation,
      variables: { user: user }
    }).map(({ data }) => data);
  }

  /**
   * Delete the given user
   *
   * @param {User} user
   * @returns {Observable<any>}
   * @memberof UserService
   */
  deleteUser(user: User, paginator: AppPaginator, sort: AppSort, pattern: String) {
    return this.apollo.mutate({
      mutation: deleteUserMutation,
      variables: { id: user.id },
      refetchQueries: [{
        query: listUserQuery,
        variables: { paginator: paginator, sort: sort, pattern: pattern }
      }]
    });
  }
}
