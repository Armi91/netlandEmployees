import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Position } from '../models/position.enum';

export function validatePosition(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = Object.values(Position).includes(control.value);
    return isValid ? null : { invalidPosition: { value: control.value } };
  };
}
