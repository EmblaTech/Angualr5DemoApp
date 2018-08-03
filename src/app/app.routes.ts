import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'sample',loadChildren: 'app/sample/sample.module#SampleModule' },
    { 
        path: '',
        redirectTo: '/',
        pathMatch: 'full' 
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);