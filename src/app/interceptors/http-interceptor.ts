import { Injectable, Injector, ErrorHandler} from '@angular/core';
import { HttpEvent,HttpInterceptor,HttpHandler, HttpRequest,HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercept : '+req.url);
        // if(this.dataContext.token!=undefined){
        //      req = req.clone({ setHeaders: { 'Authorization': `token ${this.dataContext.token}` } });
        // }
        return next.handle(req).catch(response => {
            if (response instanceof HttpErrorResponse) { //if error has thrown
                //console.log('Processing http error', response);
                if (response.status == 403 || 
                    response.status == 401 ) {
                    this.router.navigate([""]);
                }
            }

            return Observable.throw(response);
      });
    }
}
