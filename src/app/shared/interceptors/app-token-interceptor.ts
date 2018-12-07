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
    if (this.auth.getTokenInSession()) {
      req = req.clone({
        setHeaders: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          'Authorization': this.auth.getTokenInSession(),
        },
      });
    }
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            const tokenResponse = event.headers.get('Authorization');
            if (tokenResponse) {
              this.auth.saveTokenInSession(tokenResponse);
            }
          }
        }
      )
    );
  }

}
