
import { HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model'
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  url: string = 'localhost:8080/order';

  postOrder(order: Order) {
    console.log('order',order);
    
    return this.http.post<Order>('http://localhost:8080/order', order);
  }

  getOrders() {
    return this.http.get<Order[]>('http://localhost:8080/order');
  }

  getOrder(id: string) {
    return this.http.get<Order>('http://localhost:8080/order/id',
      {  params: new HttpParams().set('id', id)}
    );
  }

  updateOrder(id: string, order: Order) {
    return this.http.put<Order>
      ('http://localhost:8080/order',
        order,
        { params: new HttpParams().set('id', id) }
      )
  }

  deleteOrder(id: string) {
    return this.http.delete<Order>
      ('http://localhost:8080/order',
        { params: new HttpParams().set('id', id) }
      )
  }
}
