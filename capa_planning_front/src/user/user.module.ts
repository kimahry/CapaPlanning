import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorStateMatcher } from '@angular/material';
// Project dependencie
import { ManagerUserComponent } from './manager-user/manager-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutes } from './user.routing';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutes
  ],
  exports: [
    CommonModule
  ],
  declarations: [
    CreateUserComponent,
    ListUserComponent,
    ManagerUserComponent,
    ViewUserComponent
],
  providers: [UserService]
})
export class UserModule { }
