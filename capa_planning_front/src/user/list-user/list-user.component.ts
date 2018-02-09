import { User } from '../model/user';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { UpperCasePipe } from '@angular/common';
import { QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { merge } from 'rxjs/observable/merge';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { AppPaginator } from '../../shared/table/app-paginator';
import { AppSort } from '../../shared/table/app-sort';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, AfterViewInit {

  displayedColumns = ['firstName', 'lastName', 'email', 'actions'];
  dataSource: MatTableDataSource<User>;
  isLoadingResults = true;
  resultsLength = 0;
  filterInput = '';
  constructor(private userService: UserService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<User>([]);
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
    this.sort.active = 'firstName';
    this.sort.direction = 'asc';

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        const upper = new UpperCasePipe;
        const paginator = new AppPaginator(this.paginator.pageIndex, this.paginator.pageSize);
        const sort = new AppSort(this.sort.active, upper.transform(this.sort.direction));
        this.isLoadingResults = false;
        return this.userService.getUsers(paginator, sort, this.filterInput);
      })
    ).subscribe(res => {
      this.isLoadingResults = true;
      this.dataSource.data = res.listUser;
      this.resultsLength = res.countUser;
    });
  }

  deleteUser(user: User) {
    this.dataSource.data = this.userService.deleteUser(user);
  }

  applyFilter(value) {

  }

}
