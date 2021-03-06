import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { UpperCasePipe } from '@angular/common';
// rxjs
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
// App
import { AppPaginator } from '../../shared/table/app-paginator';
import { AppSort } from '../../shared/table/app-sort';
import { UserDatasource } from '../user-datasource';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { ConfirmDialogComponent } from '../../shared/modals/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, AfterViewInit {

  displayedColumns = ['firstName', 'lastName', 'email', 'actions'];
  dataSource: UserDatasource;
  isLoadingResults = true;
  filterInput = '';
  constructor(private userService: UserService, private dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {

    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // Trigger load users on page change and sorting
    Observable.merge(this.sort.sortChange, this.paginator.page).subscribe(() => this.loadUsers());

    // server-side search
    Observable.fromEvent(this.input.nativeElement, 'keyup').pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => {
        this.paginator.pageIndex = 0;
        this.loadUsers();
      })
    ).subscribe();
  }

  ngOnInit() {
    this.dataSource = new UserDatasource(this.userService);
    this.dataSource.loadUsers();
  }

  private loadUsers() {
    this.dataSource.loadUsers(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.input.nativeElement.value);
  }

  openDialog(user: User): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { title: 'Confirm box', msg: 'Are you sure you want to delete this user?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'OK') {
        this.dataSource.deleteUsers(user, this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.input.nativeElement.value);
      }
    });
  }

}
