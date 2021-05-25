import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[defaultEmail]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: DefaultEmailValidator,
      multi: true
  }]
})
export class DefaultEmailValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value === 'martins@email.com' ? null : { invalidEmail: true }
  }
}

export class EmailValidators {
  static default(control: AbstractControl): ValidationErrors | null {
    return control.value === 'martins@email.com' ? null : { invalidEmail: true }
  }
}