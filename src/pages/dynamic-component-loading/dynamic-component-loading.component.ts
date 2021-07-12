import { Component, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicAComponent } from './dynamic-a.component';
import { DynamicBComponent } from './dynamic-b.component';
import { DynamicCComponent } from './dynamic-c.component';

@Component({
  selector: 'app-dynamic-component-loading',
  templateUrl: 'dynamic-component-loading.component.html',
  styles: [
  ]
})
export class DynamicComponentLoadingComponent {
  @ViewChild("componentContainer", { read: ViewContainerRef }) viewContainer: ViewContainerRef;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  // Basic example
  loadComponentA(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicAComponent);
    this.viewContainer.clear();

    this.viewContainer.createComponent<DynamicAComponent>(factory);
  }

  // Passing data between the component
  loadComponentB(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicBComponent);
    this.viewContainer.clear();

    const component = this.viewContainer.createComponent<DynamicBComponent>(factory);
    component.instance.message = 'Custom message B!';
  }

  // Using the generalization of the component loading
  loadComponentC(): void {
    this.loadComponent(DynamicCComponent);
  }

  // This is a generalization of the component loading
  loadComponent(componentClass: Type<unknown>): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    this.viewContainer.clear();

    this.viewContainer.createComponent<unknown>(factory);
  }

}
