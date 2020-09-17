import { AuthService } from './../../shared/services/auth.service';
import { Order } from '../../shared/models/order.model';
import { Component, OnInit, ViewChild, DoCheck, OnChanges } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  // displayedColumns: string[] = ['productName', 'productPrice'];
  orders: Order[] = [];
  role: string = '';
  constructor(private orderService: OrderService, private authService: AuthService) { }

  displayedColumns: string[] = ['name', 'Brand', 'Price', 'Rating', 'Description', 'action'];
  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.role = user.role;
    })
    this.orderDetails();

  }

  async deleteOrder(id: string) {
    await this.orderService.deleteOrder(id)
      .subscribe(result => {
        if (result)
          this.orderDetails();
      })
  }

  orderDetails() {
    this.orderService.getOrders()
      .subscribe(ordersRes => {
        this.orders = ordersRes;
        console.log(this.orders);
      });
  }

}
