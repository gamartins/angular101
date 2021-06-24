import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { SliderInputComponent } from './slider-input.component';

describe('SliderInput', () => {
  let control: FormControl;
  let component: SliderInputComponent;
  let spectator: SpectatorHost<SliderInputComponent>

  const createHost = createHostFactory({
    component: SliderInputComponent,
    imports: [ReactiveFormsModule]
  });

  const defineHost = () => {
    control = new FormControl(0);
    spectator = createHost(`<app-slider-input [formControl]="control"></app-slider-input>`, {
      hostProps: { control }
    });
  }

  beforeEach(() => {
    defineHost();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive the min attribute', () => {
    spectator.setInput('min', 10);

    expect(spectator.query('input').getAttribute('min')).toBe('10');
  });

  it('should receive the max attribute', () => {
    spectator.setInput('max', 120);

    expect(spectator.query('input').getAttribute('max')).toBe('120');
  });

  it('should receive the disabled attribute', () => {
    control.disable()

    expect(spectator.query('input[disabled]')).toBeDefined();
  });

  it('should receive the value attribute', () => {
    control.setValue(50)

    spectator.detectChanges();

    const el = spectator.query('input') as HTMLInputElement

    expect(el.value).toBe('50');
  });
});
