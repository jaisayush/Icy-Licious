import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product/view-product.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ViewProductComponent],
  imports: [CommonModule,MatCardModule,MatButtonModule],
  exports: [ViewProductComponent],
})
export class ViewProductModule {}
