import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helper';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';

import { JwtInterceptor, ErrorInterceptor } from './_helper';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

import { ClientIndexComponent } from './clientArea/client-index/client-index.component';
import { ClientCreateComponent } from "./clientArea/client-create/client-create.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ClientIndexComponent,
    ClientCreateComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
