import { User } from '../model/user';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { JsonPipe } from '@angular/common';
import { QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, AfterViewInit {

  displayedColumns = ['firstName', 'lastName', 'email', 'actions'];
  dataSource: MatTableDataSource<User>;

  constructor(private userService: UserService) { }

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
    this.userService.getUsers().subscribe(res => this.dataSource.data = res );
    this.userService.getUsers('').subscribe(res => this.dataSource.data = res );
  }

  deleteUser(user: User) {
    const json: JsonPipe = new JsonPipe;
    this.dataSource.data = this.userService.deleteUser(user);
  }

  applyFilter(filterValue: string) {
    this.userService.getUsers(filterValue.trim()).subscribe(res => this.dataSource.data = res );
  }

}
