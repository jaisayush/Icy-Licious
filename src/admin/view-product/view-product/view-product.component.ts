import { ViewProductService } from './../view-product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  public products;
  constructor(private service: ViewProductService) {
    this.service.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  ngOnInit(): void {}
}
