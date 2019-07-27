import { OrderItem } from './OrderItem';
export class Order
{

     Id :number;
     Date :string;
     TotalAmount :number;
     OrderItem :OrderItem;
}

export class LogInModel{
     email:string;
     password:string;
}