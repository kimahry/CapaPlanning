import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { UpperCasePipe } from '@angular/common';
// Rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { catchError, finalize } from 'rxjs/operators';
// App
import { AppPaginator } from '../shared/table/app-paginator';
import { AppSort } from '../shared/table/app-sort';
import { UserService } from './user.service';
import { User } from './models/user';

export class UserDatasource implements DataSource<User> {

    private users = new BehaviorSubject<User[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public resultsLength = 0;

    constructor(private userService: UserService) { }

    /**
     * Connect to the Observable of the datasource
     *
     * @param {CollectionViewer} collectionViewer
     * @returns {Observable<User[]>}
     * @memberof UserDatasource
     */
    connect(collectionViewer: CollectionViewer): Observable<User[]> {
        return this.users.asObservable();
    }

    /**
     * Diconnect to the Observable of the datasource
     *
     * @param {CollectionViewer} collectionViewer
     * @memberof UserDatasource
     */
    disconnect(collectionViewer: CollectionViewer): void {
        this.users.complete();
        this.loadingSubject.complete();
    }

    /**
     * Load the users
     *
     * @param {number} [pageIndex=0]
     * @param {number} [pageSize=10]
     * @param {string} [active='firstName']
     * @param {string} [direction='asc']
     * @param {String} [pattern='']
     * @memberof UserDatasource
     */
    loadUsers(pageIndex: number = 0, pageSize: number = 10, active: string = 'firstName', direction: string = 'asc', pattern: String = '') {
        this.loadingSubject.next(true);

        this.userService.getUsers(this.getPaginator(pageIndex, pageSize), this.getSort(active, direction), pattern).pipe(
            catchError(() => Observable.of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe(res => {
            this.loadingSubject.next(false);
            this.resultsLength = res.countUser;
            this.users.next(res.listUser);
        });
    }

    deleteUsers(user: User, pageIndex: number, pageSize: number, active: string, direction: string, pattern: String) {
        this.userService.deleteUser(user, this.getPaginator(pageIndex, pageSize), this.getSort(active, direction), pattern).subscribe(res => {
            // nothing to do
        });
    }

    private getPaginator(pageIndex: number, pageSize: number) {
        return new AppPaginator(pageIndex, pageSize);
    }

    private getSort(active: string, direction: string) {
        const upper = new UpperCasePipe;
        return new AppSort(active, upper.transform(direction));
    }

}
