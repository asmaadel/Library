import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { OrderService } from '../order.service';
import { Order } from '../Models/Order';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  order: Order = new Order();
  submitted = false;
  
  constructor(private orderService: OrderService) 
  { 

   
  }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.order = new Order();
  }

  save() {
    this.orderService.addOrder(this.order)
      .subscribe(data => console.log(data), error => console.log(error));
    this.order = new Order();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}