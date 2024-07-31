import { Injectable } from '@angular/core';
import {AuthService} from "../../api/service/auth-service";
import {AuthResponse, UserCredential} from "../../api/model/model";
import {Observable, tap} from "rxjs";
import {APP_ROLE, APP_TOKEN} from "../../api/api-config";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor(public authService:AuthService,public  router:Router) { }

  clearSession(){
    sessionStorage.removeItem(APP_ROLE);
    sessionStorage.removeItem(APP_TOKEN);
  }

  authenticate(userCredential:UserCredential):Observable<AuthResponse>{
    return this.authService
      .authenticate(userCredential)
      .pipe(
        tap(authResp=>{
          if (authResp){
            const {token,role}=authResp;
            sessionStorage.setItem(APP_ROLE,role);
            sessionStorage.setItem(APP_TOKEN,token);

            if (role=='PROCESSOR' || role=='PROCESSOR'){
              this.router.navigate(['/dashboard']);
            }
            if (role=='CUSTOMER'){
              this.router.navigate(['/customer']);
            }
          }
        })
      );
  }

  token():String|null{
    return sessionStorage.getItem(APP_TOKEN);
  }


  role():String|null{
    return sessionStorage.getItem(APP_ROLE);
  }
}
