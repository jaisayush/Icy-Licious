import { ViewProductModule } from './../admin/view-product/view-product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { DashboardModule} from '../admin/dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductModule } from 'src/admin/add-product/add-product.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DashboardModule } from 'src/admin/dashboard/dashboard.module';
import {ShowOrdersModule} from 'src/admin/show-orders/show-orders.module'
// import { DashboardModule } from 'src/admin/dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddProductModule,
    ViewProductModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    DashboardModule,
    ShowOrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
