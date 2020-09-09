import { Order } from './../../shared/order.model';
import { Component, OnInit, ViewChild, DoCheck, OnChanges } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  // displayedColumns: string[] = ['productName', 'productPrice'];
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  displayedColumns: string[] = ['name', 'Brand', 'Price', 'Rating', 'Description', 'action'];
  ngOnInit(): void {
    this.orderDetails();
  }

  async deleteOrder(id: string) {
   await this.orderService.deleteOrder(id)
      .subscribe(result => {
        console.log(result);
      })
    this.orderDetails();
  }

  orderDetails() {
    this.orderService.getOrders()
      .subscribe(ordersRes => {
        this.orders = ordersRes;
        console.log(this.orders);
      });
  }

}
