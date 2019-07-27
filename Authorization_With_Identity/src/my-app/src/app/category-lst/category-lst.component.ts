import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/Category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-lst',
  templateUrl: './category-lst.component.html',
  styleUrls: ['./category-lst.component.css']
})
export class CategoryLstComponent implements OnInit {

  categorylist: Category[];
  dataavailbale: Boolean = false;
  constructor(private dataservce: CategoryService, private route: Router) {
    this.LoadData();
   }
  ngOnInit() {
    this.LoadData();
  }

  LoadData() {

    this.dataservce.getCategories().subscribe((tempdate) => {
      this.categorylist = tempdate;
      if (this.categorylist.length > 0) {
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
   /*  if (confirm("Are you sure you want to delete this ?")) {
      this.dataservce.deleteOrder(id).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      }) 
    }*/
  }
}


