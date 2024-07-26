import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {OnboardingDetailComponent} from "./onboarding-detail/onboarding-detail.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path:'detail/:id',
    component:OnboardingDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
