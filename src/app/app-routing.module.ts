import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CsDetailComponent } from './cs-detail/cs-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CsDetailComponent },
  { path: 'companies', component: CompaniesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
