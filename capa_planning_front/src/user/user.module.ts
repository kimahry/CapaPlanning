import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ErrorStateMatcher } from '@angular/material';
// Project dependencie
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ManagerUserComponent } from './manager-user/manager-user.component';
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
    ManagerUserComponent
  ],
  providers: [UserService]
})
export class UserModule { }
