import { Routes } from '@angular/router/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/core';

const path: Routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' }
];

const appRoutes: ModuleWithProviders = RouterModule.forRoot(path);

export default appRoutes;
