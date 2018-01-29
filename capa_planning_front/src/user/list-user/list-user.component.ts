import { User } from '../model/user';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { JsonPipe } from '@angular/common';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

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

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, AfterViewInit {
  loading: boolean;
  users: User[] = [];
  displayedColumns = ['firstName', 'lastName', 'email', 'actions'];
  dataSource: MatTableDataSource<User>;

  constructor(private userService: UserService, private apollo: Apollo) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<User>([]);
    this.apollo.watchQuery<any>({
      query: CurrentUserForProfile
    })
      .valueChanges
      .subscribe(({ data }) => {
        this.loading = data.loading;
        this.dataSource.data = data.listUser;
      });
  }
  // ngOnInit() {
  //   this.userService.getUsers().subscribe(users => this.users = users);
  //   this.dataSource = new MatTableDataSource<User>(this.users);
  // }

  deleteUser(user: User) {
    const json: JsonPipe = new JsonPipe;
    this.dataSource.data = this.userService.deleteUser(user);
  }

}
