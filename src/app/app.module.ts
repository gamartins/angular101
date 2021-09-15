import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';

const routes: Routes = [
  {
    path: 'custom-directives',
    loadChildren: () => import('src/pages/custom-directives/custom-directives.module').then(m => m.CustomDirectivesModule)
  },
  {
    path: 'custom-validators',
    loadChildren: () => import('src/pages/custom-validators/custom-validators.module').then(m => m.CustomValidatorsModule)
  },
  {
    path: 'control-value-acessor',
    loadChildren: () => import('src/pages/control-value-accessor/control-value-accessor.module').then(m => m.ControlValueAccessorModule)
  },
  {
    path: 'change-detector',
    loadChildren: () => import('src/pages/change-detector/change-detector.module').then(m => m.ChangeDetectorModule)
  },
  {
    path: 'change-detection',
    loadChildren: () => import('src/pages/change-detection/change-detection.module').then(m => m.ChangeDetectionModule)
  },
  {
    path: 'dynamic-component-loading',
    loadChildren: () => import('src/pages/dynamic-component-loading/dynamic-component-loading.module').then(m => m.DynamicComponentLoadingModule)
  },
  {
    path: 'route-guards',
    loadChildren: () => import('src/pages/route-guards/route-guards.module').then(m => m.RouteGuardsModule),
  },
  {
    path: 'ng-directives-advanced',
    loadChildren: () => import('src/pages/ng-directives-advanced/ng-directives-advanced.module').then(m => m.NgDirectivesAdvancedModule),
  },
  {
    path: 'dependency-injection',
    loadChildren: () => import('src/pages/dependency-injection-example/dependency-injection-example.module').then(m => m.DependencyInjectionExampleModule),
  },
  {
    path: '**',
    component:  HomeComponent
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      // { preloadingStrategy: PreloadAllModules }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
