import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardingDetailComponent } from './onboarding-detail/onboarding-detail.component';
import { DetailSearchComponent } from './detail-search/detail-search.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    OnboardingDetailComponent,
    DetailSearchComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule { }
