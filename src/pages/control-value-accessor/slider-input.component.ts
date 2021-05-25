import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slider-input',
  template: `
    <div>
      <label class="form-label" for="customRange">Example range</label>
      <input
        class="form-range"
        id="customRange2"
        type="range"
        [min]="min"
        [max]="100"
        [attr.disabled]="disabled ? '' : null"
        [formControl]="internalControl">
    </div>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderInputComponent),
    multi: true,
  }]
})
export class SliderInputComponent implements ControlValueAccessor {
  @Input() min = 0;
  @Input() max = 100;
  @Input() disabled = false;

  onChange = (val: unknown) => {};
  onTouched = () => {};

  internalControl = new FormControl();
  
  writeValue(val: number): void {
    this.internalControl.setValue(val);
    this.onChange(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
