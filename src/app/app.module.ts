import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CsDetailComponent } from './cs-detail/cs-detail.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanySearchComponent } from './company-search/company-search.component';
import { MsgsComponent } from './msgs/msgs.component';
import { NowdateComponent } from './nowdate/nowdate.component';
import { GaugeComponent } from './gauge/gauge.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CompaniesComponent,
    CsDetailComponent,
    MsgsComponent,
    CompanySearchComponent,
    NowdateComponent,
    GaugeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
