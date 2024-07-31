import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AppAuthService} from "../service/auth/app-auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    public toastrService: ToastrService,
    private appAuthService: AppAuthService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(catchError(err => {
        if (err.status == 401 || err.status == 403) {
          this.appAuthService.clearSession();
          this.toastrService.error('Forbidden', 'Authorization Error');
          this.router.navigate(['/auth']);
        } else if (err.status === 404) {
          this.toastrService.error('Check if you are connected to internet', 'Application could not connect to services');
        } else if (err.status >= 500 && err.status < 600) {
          this.toastrService.error('Contact your support group and try again', 'Temporary Problem');
        }
      }));
  }
}
