import { Component } from '@angular/core';
import { AnotherProviderService } from './another-provider.service';
import { BaseProviderService } from './base-provider.service';

@Component({
  selector: 'app-dependency-injection-example',
  template: `
    <button class="btn btn-primary" (click)="log()">Log message</button>
    <br><br>
    <button class="btn btn-secondary" (click)="apiRequest()">API message</button>
  `
})
export class DependencyInjectionExampleComponent {

  constructor(
    private baseProvider: BaseProviderService,
    private anotherProvider: AnotherProviderService,
  ) { }

  log(): void {
    this.baseProvider.log()
  }

  apiRequest(): void {
    this.anotherProvider.log()
  }

}
