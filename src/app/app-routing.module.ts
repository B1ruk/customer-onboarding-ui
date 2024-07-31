import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {
    path: 'customer',
    canLoad:[AuthGuard],
    loadChildren: () =>
      import('./feature-modules/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'dashboard',
    canLoad:[AuthGuard],
    loadChildren: () =>
      import('./feature-modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./feature-modules/auth/auth.module').then(
        (m) => m.AuthModule
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
