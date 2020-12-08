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
}
