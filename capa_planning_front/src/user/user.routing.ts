import { Routes, RouterModule } from '@angular/router';
import { ManagerUserComponent } from './manager-user/manager-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: 'createUser', component: CreateUserComponent },
  { path: 'manageUser', component: ManagerUserComponent },
  { path: 'users', component: ListUserComponent },
];

export const UserRoutes = RouterModule.forChild(routes);
