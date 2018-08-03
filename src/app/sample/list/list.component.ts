import { Component, OnInit } from '@angular/core';
import { SampleService } from '../../services/index.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private sampleService:SampleService) { }

  ngOnInit() {
  }

  LoadFromService(){
    this.sampleService.getProjects().subscribe(data => console.log(data));  
  }
}
