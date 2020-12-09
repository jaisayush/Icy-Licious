import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product/view-product.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewProductComponent],
  imports: [CommonModule,MatCardModule,MatButtonModule,ReactiveFormsModule],
  exports: [ViewProductComponent],
})
export class ViewProductModule {}
