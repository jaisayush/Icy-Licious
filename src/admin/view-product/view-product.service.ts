import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewProductService {
  url = 'http://localhost:3000/products';
  constructor(private HttpClient: HttpClient) {}
  getProducts() {
    return this.HttpClient.get(this.url);
  }
  updateProducts(data) {
    return this.HttpClient.patch('http://localhost:3000/product', data);
  }

  deleteProduct(id) {
    return this.HttpClient.post('http://localhost:3000/deleteproduct', id);
  }
}
