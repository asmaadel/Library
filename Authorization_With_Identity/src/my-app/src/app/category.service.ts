import { Injectable } from '@angular/core';
import { Category } from './Models/Category';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ROOT_URL } from 'src/Config';
import { Book } from './Models/Book';
import {  BorrowDto } from './Models/Borrow';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  orders:Observable<Category[]>;
  url:string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http:HttpClient) { }
  getCategories() {
    this.url=ROOT_URL + 'Category';
    return this.http.get<Category[]>(this.url);
  }
  getCategoryBooks(id:number){
    this.url=ROOT_URL + 'Category/Books/'+id;
    return this.http.get<Book[]>(this.url);
  }
  getCurrentBook(id:number){
    this.url=ROOT_URL + 'book/'+id;
    return this.http.get<Book>(this.url);
  }
  addBorrow(borrow: BorrowDto) {
   this.url=ROOT_URL + 'Book';
   console.log(borrow);
   console.log(this.url);
    return this.http.post(`${this.url}`,borrow);
  }
}
