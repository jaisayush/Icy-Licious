import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get('http://localhost:3000/productCount');
  }
  getOrders(){
    return this.http.get('http://localhost:3000/orderCount')
  }
  getEmailSubscribers(){
    return this.http.get('http://localhost:3000/email/countemail');
  }
}
