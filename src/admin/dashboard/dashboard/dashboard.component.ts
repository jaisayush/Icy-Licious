import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public orders:any;
  public emailSubscribers:any;
  public products:any;
  constructor(private http:HttpClient,private service:DashboardService) { }

  ngOnInit() {
    console.log("hello");
    //emailSubscribers
    let res=this.service.getEmailSubscribers();
    res.subscribe((data)=>console.log(data));
    res.subscribe((data)=>this.emailSubscribers=data);
    //orders
    let response=this.service.getOrders();
    response.subscribe((data)=>console.log(data));
    response.subscribe((data)=>this.orders=data);
    //products
    let product=this.service.getProducts();
    product.subscribe((data)=>console.log(data));
    product.subscribe((data)=>this.products=data);

  }
}
