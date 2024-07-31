import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppAuthService} from "../service/auth/app-auth.service";

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(public appAuthService: AppAuthService) {
  }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const jwt = this.appAuthService.token();
    if (jwt) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt}`
        }
      });

      return next.handle(req);
    }
  }
}
