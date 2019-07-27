import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Book } from '../Models/Book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-lst',
  templateUrl: './books-lst.component.html',
  styleUrls: ['./books-lst.component.css']
})
export class BooksLstComponent implements OnInit {
  id:number;

  booksLst: Book[]=[];
  dataavailbale: Boolean = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private dataservce: CategoryService) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.LoadData(this.id)
  }
  LoadData(id:number) {

    this.dataservce.getCategoryBooks(id).subscribe((tempdate) => {
      this.booksLst = tempdate;
      if (this.booksLst.length > 0) {
        console.log(this.booksLst);
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

  Borrow(id:number)
  {
    this.router.navigate(['Borrow', id]);
  }
}
