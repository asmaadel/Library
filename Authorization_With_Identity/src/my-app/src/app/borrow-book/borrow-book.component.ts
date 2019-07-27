import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material';
import { BorrowDto } from '../Models/Borrow';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {

  id:number;

  currentbook: Book=new Book;
  dataavailbale: Boolean = false;
  startDate = new Date(2019, 0, 2);
  borrowfrom=new Date();
  borrowto=new Date();
  borrowbook=new BorrowDto();
  constructor(private route: ActivatedRoute,private router: Router,
    private dataservce: CategoryService)
     {

     }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.LoadData(this.id)
  }
  LoadData(id:number) {

    this.dataservce.getCurrentBook(id).subscribe((tempdate) => {
      this.currentbook = tempdate;
        this.dataavailbale = true;
    })
      , err => {
      //  console.log(err);
      }
  }
  borrow(){
    this.borrowbook.BorrowBack=this.borrowto.toDateString();
    this.borrowbook.BorrowIn=this.borrowfrom.toDateString();
    this.borrowbook.Id=this.id.toString();
   this.dataservce.addBorrow(this.borrowbook);
  }

  borrowFromEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.borrowfrom=event.value;
  }
  borrowtoEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.borrowto=event.value;
  }
}
