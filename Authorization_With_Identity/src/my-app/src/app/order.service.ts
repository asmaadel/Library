import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Order, LogInModel } from './Models/Order';
import { Observable, Subject } from 'rxjs';
import { ROOT_URL } from 'src/Config';
import { OrderItem } from './Models/OrderItem';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
orders:Observable<Order[]>;
url:string;
private subject = new Subject<any>();
private keepAfterNavigationChange = false;
logModel:LogInModel;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
  constructor(private http:HttpClient) { }
  getOrders() {
    this.url=ROOT_URL + 'order';
    console.log(this.url);
    return this.http.get<Order[]>(this.url);
    
  }

  getOrderItems(orderId:number) {
    this.url=ROOT_URL + 'order/OrderItems/'+orderId;
    console.log(this.url);
    return this.http.get<OrderItem[]>(this.url);
    
  }
  deleteOrder(orderId:number)
  {
    this.url=ROOT_URL + 'order';
    return this.http.delete(`${this.url}/${orderId}`, { responseType: 'text' });

  }
  addOrder(order: Order) {
    console.log(ROOT_URL);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      totalAmount: order.TotalAmount, date: order.Date
    }
   this.url=ROOT_URL + 'order';
    return this.http.post(`${this.url}`, order);
  }

  EditOrder(order: Order) {
    console.log(order);
    this.url=ROOT_URL + 'order';
    var body = {
      TotalAmount: order.TotalAmount, Date: order.Date
    }
    return this.http.put(`${this.url}`, order);
  }
   
  getOrderbyId(id:number)
  {
    this.url=ROOT_URL + 'Order/'+id;
    return this.http.get<Order>(this.url);
  } 
  addOrderItem(orderItem:OrderItem)
  {
    console.log(ROOT_URL);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Amount: orderItem.Amount, ItemId: orderItem.ItemId,UnitId:orderItem.UnitId
    }
   this.url=ROOT_URL + 'orderItem';
    return this.http.post(`${this.url}`, orderItem);
  }
  login(username: string, password: string) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    this.logModel=new LogInModel();
    this.logModel.email= username;
    this.logModel.password= password;
    this.url=ROOT_URL + 'account';

    return this.http.post(`${this.url}`,this.logModel);
        /* .pipe(new Map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
            }
            return user;
          })); */
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
 //   this.currentUserSubject.next(null);
}
error(message: string, keepAfterNavigationChange = false) {
  this.keepAfterNavigationChange = keepAfterNavigationChange;
  this.subject.next({ type: 'error', text: message });
}
}
