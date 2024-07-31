import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_GATEWAY} from "../api-config";
import {Application} from "../model/model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OnboardingServiceService {

  private apiUrl = `${API_GATEWAY}/onboarding/api/applications`; // Endpoint URL


  constructor(private http: HttpClient) {

  }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/onboardings`);
  }

  getApplication(id:string): Observable<Application> {
    return this.http.get<Application>(`${this.apiUrl}/onboarding/${id}`);
  }

  createApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, application);
  }

  updateApplication(application: Application): Observable<Application> {
    const url = `${this.apiUrl}`;
    return this.http.put<Application>(url, application);
  }
}
