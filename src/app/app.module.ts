import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManualComponent } from './manual/manual';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';
import { ActfiveComponent } from './actfive/actfive.component';
import { ChildfiveComponent } from './childfive/childfive.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { DatadrivenComponent } from './datadriven/datadriven.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpAndServicesComponent } from './http-and-services/http-and-services.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManualComponent,
    ChildComponent,
    ActfiveComponent,
    ChildfiveComponent,
    TemplatedrivenComponent,
    DatadrivenComponent,
    HttpAndServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
