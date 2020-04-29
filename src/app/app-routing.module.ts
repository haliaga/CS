import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CsDetailComponent } from './cs-detail/cs-detail.component';
import { NowdateComponent} from './nowdate/nowdate.component';

const routes: Routes = [
  { path: '', redirectTo: '/nowdate', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CsDetailComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'nowdate', component: NowdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
