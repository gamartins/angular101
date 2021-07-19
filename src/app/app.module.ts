import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from 'src/pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomValidatorsModule } from 'src/pages/custom-validators/custom-validators.module';
import { ControlValueAccessorModule } from 'src/pages/control-value-accessor/control-value-accessor.module';
import { ChangeDetectionModule } from 'src/pages/change-detection/change-detection.module';
import { ChangeDetectorModule } from 'src/pages/change-detector/change-detector.module';
import { DynamicComponentLoadingModule } from 'src/pages/dynamic-component-loading/dynamic-component-loading.module';
import { CustomDirectivesModule } from 'src/pages/custom-directives/custom-directives.module';

import { CustomValidatorsComponent } from 'src/pages/custom-validators/custom-validators.component';
import { ControlValueAccessorComponent } from 'src/pages/control-value-accessor/control-value-accessor.component';
import { ChangeDetectionComponent } from 'src/pages/change-detection/change-detection.component';
import { ChangeDetectorParentComponent } from 'src/pages/change-detector/change-detector-parent.component';
import { DynamicComponentLoadingComponent } from 'src/pages/dynamic-component-loading/dynamic-component-loading.component';
import { CustomDirectivesComponent } from 'src/pages/custom-directives/custom-directives.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'custom-directives', component: CustomDirectivesComponent },
      { path: 'custom-validators', component: CustomValidatorsComponent },
      { path: 'control-value-acessor', component: ControlValueAccessorComponent },
      { path: 'change-detector', component: ChangeDetectorParentComponent },
      { path: 'change-detection', component: ChangeDetectionComponent },
      { path: 'dynamic-component-loading', component: DynamicComponentLoadingComponent },
      { path: '**', component:  HomeComponent }
    ]),
    DynamicComponentLoadingModule,
    CustomValidatorsModule,
    ControlValueAccessorModule,
    ChangeDetectionModule,
    ChangeDetectorModule,
    CustomDirectivesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
