import { Component, OnInit } from '@angular/core';
import {ShowOrdersService} from '../show-orders.service'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.scss']
})
export class ShowOrdersComponent implements OnInit {

  orderId:any;
  activeOrders:any=[];
  deliveredOrders:any=[];
  orders:any=[];
  order:any=[];
  constructor(private httpClient:HttpClient,private router:Router,private route:ActivatedRoute,private service:ShowOrdersService) { 
    this.service.getOrdersList().subscribe((response) => {
      this.orders = response;
      console.log(this.orders);
      for(let ord of this.orders){
        if(ord.status=="ordered"){
          this.activeOrders.push(ord);
        }
        else if(ord.status=="delivered"){
          this.deliveredOrders.push(ord);
        }
      }
    });

  }
 
  ngOnInit(): void {
  }
  

  getDate(date:any){
    let newDate = date.substring(0,10)
    return newDate
  }
  getOrderId(orderId:any){
    console.log(this.orders)
    this.orderId=orderId;
    console.log(orderId)
    for(let i of this.orders){
      if(i._id==orderId){
        this.order = i;
        //console.log(this.order);
      }
    }
    console.log(this.order);
  }

  setOrderId(id:any){
    this.orderId=id;
  }

  setStatus(status:any){
    console.log(status);
    console.log(this.orderId);
    this.httpClient.patch("http://localhost:3000/updateOrderStatus",
    {_id:this.orderId,status:status})
    .subscribe(
        (val) => {
            console.log("PATCH call successful value returned in body", val);
            console.log("statusbtn"+this.orderId)
            let btn = document.getElementById("statusbtn"+this.orderId)as HTMLElement
            btn.innerHTML="Delivered";
            btn.style.backgroundColor = "green";
        },
        response => {
            console.log("PATCH call in error", response);
         })
  }


  showViewModal: boolean;

  showView() {
    this.showViewModal = true;
  }

  closeModal() {
    this.showViewModal = false;
  }


  showPlaceOrder:boolean;

  shoPlace(){
    this.showPlaceOrder = true;
  }
  closeplaceOrder(){
    this.showPlaceOrder = false;
  }

}
