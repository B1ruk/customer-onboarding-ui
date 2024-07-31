import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {AuthResponse, UserCredential} from "../model/model";
import {catchError, map, Observable, throwError} from "rxjs";
import {API_GATEWAY} from "../api-config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${API_GATEWAY}/authResource`; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {
  }

  authenticate(userCredential: UserCredential): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, userCredential, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error);
    return throwError(() => new Error('Something went wrong with authentication.'));
  }
}
