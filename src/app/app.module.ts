import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { CsDetailComponent } from './cs-detail/cs-detail.component';
import { MsgsComponent } from './msgs/msgs.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CsDetailComponent,
    MsgsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
