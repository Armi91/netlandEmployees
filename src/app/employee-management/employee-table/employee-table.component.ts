import { Component } from '@angular/core';
import { EmployeeService } from '../../core/services/employee.service';
import { Position } from '../../core/models/position.enum';
import { Router } from '@angular/router';
import { EmployeeNetland } from '../../core/models/employee-netland.model';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss',
})
export class EmployeeTableComponent {
  positions = Position;
  tempEditValue: any = null;
  editMap: Array<{
    name: boolean;
    age: boolean;
    isFullTime: boolean;
    position: boolean;
  }> = [];

  constructor(
    protected employeeService: EmployeeService,
    private router: Router
  ) {
    this.resetEditMap();
  }

  enableEdit(employeeInd: number, field: keyof EmployeeNetland) {
    this.resetEditMap();
    this.tempEditValue = this.employeeService.employees[employeeInd][field];
    this.editMap[employeeInd][field] = true;
  }

  disableEdit(employeeInd: number, field: keyof EmployeeNetland) {
    this.tempEditValue = null;
    this.editMap[employeeInd][field] = false;
  }

  saveEdit(employeeInd: number, field: keyof EmployeeNetland) {
    this.employeeService.updateEmployee(
      {
        ...this.employeeService.employees[employeeInd],
        [field]: this.tempEditValue,
      },
      employeeInd
    );
    this.disableEdit(employeeInd, field);
  }

  cancelEdit(employeeInd: number, field: keyof EmployeeNetland) {
    this.disableEdit(employeeInd, field);
  }

  editEmployee(employeeInd: number) {
    this.router.navigate(['/add-employee', employeeInd]);
  }

  deleteEmployee(employeeInd: number) {
    if (!confirm('Jesteś pewny, że chcesz usunąć tego pracownika?')) return;
    this.employeeService.removeEmployee(employeeInd);
  }

  resetEditMap() {
    this.editMap = this.employeeService.employees.map(() => ({
      name: false,
      age: false,
      isFullTime: false,
      position: false,
    }));
  }
}
