import { Routes, RouterModule } from '@angular/router';
import { ListProjectComponent } from './list-project/list-project.component';

const routes: Routes = [
  { path: 'projects', component: ListProjectComponent }
];

export const ProjectRoutes = RouterModule.forChild(routes);
