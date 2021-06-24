import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slider-input',
  template: `
    <div>
      <label class="form-label" for="customRange">
        {{ label }}
      </label>
      <input
        class="form-range"
        id="customRange"
        type="range"
        [min]="min"
        [max]="max"
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
  @Input() label = 'Example range';
  @Input() min = 0;
  @Input() max = 100;
  @Input() disabled = false;

  onChange = (val: unknown) => {};
  onTouched = () => {};
  
  internalControl = new FormControl(0);

  constructor() {
    this.internalControl.valueChanges.subscribe(val => this.onChange(val))
  }
  
  writeValue(val: number): void {
    this.onChange(val);
    this.internalControl.setValue(val)
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
