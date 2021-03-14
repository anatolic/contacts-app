import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import(`./packages/auth/auth.module`)
      .then(module => module.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import(`./packages/dashboard/dashboard.module`)
      .then(module => module.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
