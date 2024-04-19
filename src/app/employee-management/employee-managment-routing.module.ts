import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeManagementComponent } from './employee-management.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeManagementComponent,
    children: [
      {
        path: 'add-employee',
        component: EmployeeFormComponent,
      },
      {
        path: 'add-employee/:ind',
        component: EmployeeFormComponent,
      },
      {
        path: 'employee-list',
        component: EmployeeTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeManagmentRoutingModule {}
