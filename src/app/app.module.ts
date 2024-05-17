import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './components/layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { InformationPageComponent } from './Pages/information-page/information-page.component';
import { CourseContentPageComponent } from './Pages/course-content-page/course-content-page.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    DashboardComponent,
    CardComponent,
    InformationPageComponent,
    CourseContentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
