import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-guards',
  template: `
    <p>This is a highly protected component</p>
    <p>Some data: {{ data | json }}</p>
    <a routerLink="/">Leave</a>
  `,
  styles: [
  ]
})
export class RouteGuardsComponent implements OnInit {
  data = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(val => this.data = val.names);
  }

}
