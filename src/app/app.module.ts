import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientIndexComponent } from './clientArea/client-index/client-index.component';
import { ClientCreateComponent } from "./clientArea/client-create/client-create.component";


@NgModule({
    declarations: [
        AppComponent,
        ClientIndexComponent,
        ClientCreateComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule

    ]
})
export class AppModule { }
