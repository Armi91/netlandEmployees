import { Injectable } from '@angular/core';
import { EmployeeNetland } from '../models/employee-netland.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: EmployeeNetland[] = [];

  constructor(private router: Router) {
    this.getEmployees();
  }

  getEmployee(employeeId: number) {
    return this.employees[employeeId];
  }

  addEmployee(employee: EmployeeNetland) {
    this.employees.push(employee);
    this.updateLocalStorage();
    this.router.navigate(['/employee-list']);
  }

  updateEmployee(employee: EmployeeNetland, employeeInd: number) {
    this.employees[employeeInd] = employee;
    this.updateLocalStorage();
    this.router.navigate(['/employee-list']);
  }

  removeEmployee(employeeId: number) {
    this.employees.splice(employeeId, 1);
    this.updateLocalStorage();
  }

  getEmployees() {
    const employees = localStorage.getItem('employees');
    if (employees) {
      this.employees = JSON.parse(employees);
    }
  }

  updateLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }
}
