import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ShowOrdersService {
  url="http://localhost:3000/getOrders"
  constructor(private HttpClient: HttpClient) { }
  getOrdersList() {
    return this.HttpClient.get(this.url);
  }
}
