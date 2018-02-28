import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MatPaginator, MatSort } from '@angular/material';
// rxjs
import { Observable } from 'rxjs/Observable';
// App
import { User } from './models/user';
import { AppPaginator } from '../shared/table/app-paginator';
import { AppSort } from '../shared/table/app-sort';

const userFragment = gql`
  fragment user on User {
    id
    firstName
    lastName
    email
  }
`;

const listUserQuery = gql`
  query ($paginator: Paginator, $sort: Sort, $pattern: String) {
    listUser(paginator: $paginator, pattern: $pattern, sort: $sort) {
      ...user
    }
    countUser(pattern: $pattern)
  }
  ${userFragment}
`;

const getUserQuery = gql`
  query ($id: ID!) {
    getUser(id: $id) {
      ...user
      userWorkingDays {
        worked
        day {
          name
        }
      }
    }
  }
  ${userFragment}
`;

const createUserMutation = gql`
  mutation ($user: UserInput!) {
    createUser(user: $user) {
      user {
        ...user
      }
      errors {
        key
        msg
      }
    }
  }
  ${userFragment}
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
   * Return the user given it's ID
   *
   * @param {number} id
   * @returns {Observable<any>}
   * @memberof UserService
   */
  getUserByID(id: string) {
    return this.apollo.watchQuery<any>({
      query: getUserQuery,
      variables: { id: id }
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
