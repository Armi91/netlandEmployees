import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-management/employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-management/employee-table/employee-table.component';
import { EmployeeManagmentModule } from './employee-management/employee-managment.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, EmployeeFormComponent, EmployeeTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeManagmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
