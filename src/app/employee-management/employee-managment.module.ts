import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagmentRoutingModule } from './employee-managment-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';

@NgModule({
  declarations: [
    EmployeeManagementComponent
  ],
  imports: [CommonModule, EmployeeManagmentRoutingModule],
})
export class EmployeeManagmentModule {}
