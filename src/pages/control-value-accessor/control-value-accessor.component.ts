import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-value-acessor',
  templateUrl: 'control-value-accessor.component.html',
})
export class ControlValueAccessorComponent implements OnInit {
  sliderModel: number = 0;
  sliderControl: FormControl = new FormControl(0);

  ngOnInit(): void {
    this.sliderControl.disable()
  }
  
}
