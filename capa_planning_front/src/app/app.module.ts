import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule } from 'apollo-angular-link-http';
// App Modules
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
// Components
import { AppComponent } from './app.component';
import { ErrorStateMatcher } from '@angular/material';
import { MyErrorStateMatcher } from '../shared/validators/myErrorStateMatcher';
import AppRoutes from './app.routing';
import './rxjs-operators';
import { ProjectModule } from '../project/project.module';

// Others

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApolloModule,
    HttpClientModule,
    HttpLinkModule,
    SharedModule,
    UserModule,
    ProjectModule,
    AppRoutes
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: MyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
