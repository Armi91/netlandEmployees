import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagmentRoutingModule } from './employee-managment-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { TableEditButtonsComponent } from './table-edit-buttons/table-edit-buttons.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeManagementComponent,
    EmployeeFormComponent,
    EmployeeTableComponent,
    TableEditButtonsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeManagmentRoutingModule,
  ],
})
export class EmployeeManagmentModule {}
