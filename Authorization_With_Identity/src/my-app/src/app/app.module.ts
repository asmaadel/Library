import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './order.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderItemsComponent } from './order-items/order-items.component';
import { AddorderComponent } from './addorder/addorder.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditorderComponent } from './editorder/editorder.component';
import { AddorderitemComponent } from './addorderitem/addorderitem.component';
import { LoginComponent } from './login/login.component';
import { CategoryService } from './category.service';
import { CategoryLstComponent } from './category-lst/category-lst.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatListModule } from '@angular/material';
import { BooksLstComponent } from './books-lst/books-lst.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { AngularMaterialModule } from './angular-material.module';
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderItemsComponent,
    AddorderComponent,
    EditorderComponent,
    AddorderitemComponent,
    LoginComponent,
    CategoryLstComponent,
    BooksLstComponent,
    BorrowBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,AngularMaterialModule,
    MatListModule,
    RouterModule.forRoot(
      [{
        path:'home',component:AppComponent
      },
      {
        path:'home/order',component:OrdersComponent
      },
      {
        path:'orderItems/:orderId',component:OrderItemsComponent
      },
      {
        path:'home/addOrder',component:AddorderComponent
      },
      {
        path:'addOrderitem/:orderId',component:AddorderitemComponent
      },
      {
        path:'editOrder/:orderId',component:EditorderComponent

      },
      {
        path:'login',component:LoginComponent

      },
      {
        path:'category/:id',component:BooksLstComponent

      },{
        path:'Borrow/:id',component:BorrowBookComponent

      }
      
    ])  ],
  providers: [OrderService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
