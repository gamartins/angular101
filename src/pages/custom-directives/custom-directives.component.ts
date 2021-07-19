import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: 'custom-directive.component.html'
})
export class CustomDirectivesComponent implements OnInit {
  color = '';

  constructor() { }

  ngOnInit(): void {
  }

}
