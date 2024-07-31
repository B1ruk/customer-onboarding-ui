import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppAuthService} from "../../../service/auth/app-auth.service";
import {OnboardingServiceService} from "../../../api/service/onboarding-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public id: string = '1FR120';

  constructor(public router: Router,public appAuthService:AppAuthService,public onboardingService:OnboardingServiceService) {
  }

  ngOnInit(): void {
  }

  applications(){
    return this.onboardingService.getApplications();
  }
}
