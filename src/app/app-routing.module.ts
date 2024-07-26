import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () =>
      import('./feature-modules/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./feature-modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
