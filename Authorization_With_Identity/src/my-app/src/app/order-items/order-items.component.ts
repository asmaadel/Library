import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../Models/Order';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderItem } from '../Models/OrderItem';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
@Input()
id: number;
  orderitems: OrderItem[]=[];
  dataavailbale: Boolean = false;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private orderService: OrderService) 
    { 
     
    }

  ngOnInit() {
    this.id = this.route.snapshot.params['orderId'];
this.orderService.getOrderItems(this.id).subscribe(data=>
  {
  this.orderitems=data;
  if (this.orderitems.length > 0) {
    this.dataavailbale = true;
  }
  else {
    this.dataavailbale = false;
  }
},error=>console.log(error));

  }
  list(){
    this.router.navigate(['order']);
  }
  addOrderitem(){
    this.router.navigate(['addOrderitem',this.id]);

  }
}
