import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable()
export class SampleService {

  constructor(private httpService: HttpService) { }

  getProjects(): Observable<any[]>{
    return this.httpService.getObjects<any>("users?page=2").catch(
      error=> this.handleError(error,"error has occurred"));
  }

  private handleError(error: any, message: string) {
      return Observable.throw(error || 'Server error');
  }
}
