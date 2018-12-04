import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {AppAuthenticationService} from '../services/app-authentication.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AppTokenInterceptor implements HttpInterceptor {

  constructor(private auth: AppAuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            this.auth.saveTokenInSession(event.headers.get('Authorization'));
          }
        }
      )
    );
  }

}
