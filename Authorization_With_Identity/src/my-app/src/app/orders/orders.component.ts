import { Component, OnInit } from '@angular/core';
import { getLocaleExtraDayPeriods } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../Models/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderlist: Order[];
  dataavailbale: Boolean = false;
  constructor(private dataservce: OrderService, private route: Router) {
    this.LoadData();
   }

  ngOnInit() {
    this.LoadData();

  }

  LoadData() {

    this.dataservce.getOrders().subscribe((tempdate) => {
      this.orderlist = tempdate;
      if (this.orderlist.length > 0) {
        this.dataavailbale = true;
      }
      else {
        this.dataavailbale = false;
      }
    })
      , err => {
        console.log(err);
      }
  }

  getOrderItems(orderId:number)
  {
    this.route.navigate(['orderItems', orderId]);
  }
  getOrderById(orderId:number){
    this.route.navigate(['editOrder', orderId]);
  }
  deleteconfirmation(id: number) {
console.log("deleteconfirmation"+id);
    if (confirm("Are you sure you want to delete this ?")) {
      this.dataservce.deleteOrder(id).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }

}
