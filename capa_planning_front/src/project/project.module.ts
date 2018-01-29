import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SharedModule } from '../shared/shared.module';
import { ListProjectComponent } from './list-project/list-project.component';
import { ProjectRoutes } from './project.routing';
import { ProjectService } from './project.service';

@NgModule({
  declarations: [
    CreateProjectComponent,
    ListProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutes
  ],
  providers: [ProjectService],
  exports: [
    CreateProjectComponent
  ]

})
export class ProjectModule { }
