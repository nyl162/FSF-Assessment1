import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { importModule } from './import.module';
import { FormInputComponent } from './form-input/form-input.component';
import { CompleteComponent } from './complete/complete.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    importModule,
    RoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
