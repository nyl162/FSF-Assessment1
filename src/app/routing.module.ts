import { BrowserModule } from "@angular/platform-browser";
import {RouterModule, Routes} from '@angular/router'
import { NgModule } from "@angular/core";
import { FormInputComponent } from "./form-input/form-input.component";
import { CompleteComponent } from "./complete/complete.component";


const appRoutes :Routes = [

    {path: '' , component: FormInputComponent},
    {path: 'complete/:name' , component: CompleteComponent},
    {path: '**' , redirectTo: '/', pathMatch: 'full'}

];



@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
  })

export class RoutingModule {}