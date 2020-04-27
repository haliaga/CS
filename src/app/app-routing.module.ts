import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CsDetailComponent } from './cs-detail/cs-detail.component';
import { NowEditorComponent} from './now-editor/now-editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/noweditor', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CsDetailComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'noweditor', component: NowEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
