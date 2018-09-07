import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { importModule } from './import.module';
import { TestComponent } from './test/test.component';
import { FormInputComponent } from './form-input/form-input.component';
//import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    importModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
