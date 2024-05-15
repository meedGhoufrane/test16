import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './components/layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
