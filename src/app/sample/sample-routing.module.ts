import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { ListComponent } from './list/list.component';
// import { AuthGuard } from '../services/index.services';
//canActivate: [AuthGuard],

const routes: Routes = [
  {
    path: 'sample',
    component: SampleComponent,
    children: [
      { path: 'list',  component: ListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
