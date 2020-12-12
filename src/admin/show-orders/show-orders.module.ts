import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [ShowOrdersComponent],
  imports: [
    CommonModule,
    NgbModule,
    MatTabsModule
  ],
  exports:[
    ShowOrdersComponent,
    NgbModule
  ]
})
export class ShowOrdersModule { }
