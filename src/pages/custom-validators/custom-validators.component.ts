import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmailValidators } from './custom-validators';

@Component({
  selector: 'app-custom-validators',
  templateUrl: 'custom-validators.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
  ]
})
export class CustomValidatorsComponent {
  emailModel: string;
  emailControl: FormControl;

  constructor() {
    this.emailModel = '';
    this.emailControl = new FormControl('', EmailValidators.default);
  }

}
