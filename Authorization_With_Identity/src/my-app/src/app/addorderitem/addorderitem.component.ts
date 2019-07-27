import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../Models/OrderItem';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-addorderitem',
  templateUrl: './addorderitem.component.html',
  styleUrls: ['./addorderitem.component.css']
})
export class AddorderitemComponent implements OnInit {
  nameList: any;  
  unitList: any; 
  data:any; 
  unitdata:any; 
  nameId:Number; 
  unitId:number;
  orderitem: OrderItem = new OrderItem();
  submitted = false;
  
  constructor(private orderService: OrderService) 
   { 
     this.nameId=1;
     this.unitId=1;
    this.data=[    
      {    
        "Id": 1,    
        "Name": "Item 1"    
      },    
      {    
        "Id": 2,    
        "Name": "Item 2"    
      },    
      {    
        "Id":3,    
        "Name": "Item 3"    
      },    
      {    
        "Id": 4,    
        "Name": "Item 4"    
      } 
    ]   
    this.unitdata=[    
      {    
        "Id": 1,    
        "Name": "Unit 1"    
      },    
      {    
        "Id": 2,    
        "Name": "Unit 2"    
      },    
      {    
        "Id":3,    
        "Name": "Unit 3"    
      },    
      {    
        "Id": 4,    
        "Name": "Unit 4"    
      } 
    ]   
    this.getNameList(); 
  }

  ngOnInit() {
  }

  getNameList()  
  {   
  this.nameList= this.data;   
  this.unitList=this.unitdata;
  }
  selectName()
  {
   this.orderitem.ItemId==this.nameId;
  }
  selectunit()
  {
   this.orderitem.UnitId==this.unitId;
  }
  save() {
    this.orderService.addOrderItem(this.orderitem)
      .subscribe(data => console.log(data), error => console.log(error));
    this.orderitem = new OrderItem();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
