import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {OnboardingDetailComponent} from "./onboarding-detail/onboarding-detail.component";
import {DetailSearchComponent} from "./detail-search/detail-search.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'detail/:id',
    component: OnboardingDetailComponent
  },
  {
    path: 'detail-search',
    component: DetailSearchComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
