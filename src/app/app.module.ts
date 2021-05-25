import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from 'src/pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomValidatorsModule } from 'src/pages/custom-validators/custom-validators.module';
import { CustomValidatorsComponent } from 'src/pages/custom-validators/custom-validators.component';
import { ControlValueAccessorModule } from 'src/pages/control-value-accessor/control-value-accessor.module';
import { ControlValueAccessorComponent } from 'src/pages/control-value-accessor/control-value-accessor.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'custom-validators', component: CustomValidatorsComponent },
      { path: 'control-value-acessor', component: ControlValueAccessorComponent },
      { path: '**', component:  HomeComponent }
    ]),
    CustomValidatorsModule,
    ControlValueAccessorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
