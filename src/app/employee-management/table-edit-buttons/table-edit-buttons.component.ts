import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeNetland } from '../../core/models/employee-netland.model';

@Component({
  selector: 'app-table-edit-buttons',
  templateUrl: './table-edit-buttons.component.html',
  styleUrl: './table-edit-buttons.component.scss',
})
export class TableEditButtonsComponent {
  @Input({ required: true }) employeeInd!: number;
  @Input({ required: true }) field!: keyof EmployeeNetland;

  @Output() saveEdit = new EventEmitter<void>();
  @Output() cancelEdit = new EventEmitter<void>();
}
