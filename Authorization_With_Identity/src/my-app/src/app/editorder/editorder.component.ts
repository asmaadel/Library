import { Component, OnInit } from '@angular/core';
import { Order } from '../Models/Order';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {
  order: Order = new Order();
  submitted = false;
  id:number;
  constructor(private route: ActivatedRoute,private router: Router,
    private orderService: OrderService) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['orderId'];
    this.orderService.getOrderbyId(this.id).subscribe(data=>
      {
      this.order=data;   
    },error=>console.log(error));
    
      }
      list(){
        this.router.navigate(['order']);
      }

  save() {
    console.log(this.order);
    this.orderService.EditOrder(this.order)
      .subscribe(data => {console.log(data)
      alert("Updated successfully !!!");}
      , error => console.log(error));
this.list();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
