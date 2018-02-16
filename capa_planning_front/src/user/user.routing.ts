import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: 'createUser', component: CreateUserComponent },
  { path: 'viewUser/:id', component: ViewUserComponent },
  { path: 'users', component: ListUserComponent },
];

export const UserRoutes = RouterModule.forChild(routes);
