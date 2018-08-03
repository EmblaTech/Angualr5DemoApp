import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { ListComponent } from './list/list.component';
import { SampleRoutingModule } from './sample-routing.module';
import { FormsModule } from '@angular/forms';
import { SampleService, HttpService } from '../services/index.services';

@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule,
    FormsModule,
  ],
  providers: [SampleService,HttpService],
  declarations: [SampleComponent, ListComponent]
})
export class SampleModule { }
