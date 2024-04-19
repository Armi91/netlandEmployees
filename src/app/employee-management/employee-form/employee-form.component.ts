import { Component, OnInit } from '@angular/core';
import { Position } from '../../core/models/position.enum';
import { FormBuilder, Validators } from '@angular/forms';
import { validatePosition } from '../../core/validators/position.validator';
import { EmployeeService } from '../../core/services/employee.service';
import { EmployeeNetland } from '../../core/models/employee-netland.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent implements OnInit {
  positions = Position;
  editMode = false;
  employeeInd: number | undefined;
  employeeForm = this.fb.group({
    name: ['', Validators.required],
    age: [0, Validators.required],
    isFullTime: [false],
    position: ['', validatePosition()],
  });

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.employeeInd = +params['ind'];
      if (this.employeeInd >= 0) {
        const employee = this.employeeService.getEmployee(this.employeeInd);
        this.employeeForm.patchValue(employee);
        this.editMode = true;
      } else {
        this.editMode = false;
      }
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.editMode) {
        this.employeeService.updateEmployee(
          this.employeeForm.value as EmployeeNetland,
          this.employeeInd! // employeeInd must be defined if in editMode
        );
      } else {
        this.employeeService.addEmployee(
          this.employeeForm.value as EmployeeNetland
        );
      }
    }
  }
}
