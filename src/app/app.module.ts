import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeManagmentModule } from './employee-management/employee-managment.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EmployeeManagmentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
