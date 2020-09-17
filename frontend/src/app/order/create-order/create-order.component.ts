import { OrderService } from '../../shared/services/order.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from 'src/app/shared/models/order.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  orderId: string;
  constructor(private orderService: OrderService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

    this.router.params.subscribe(
      (data: Params) => {
        this.orderId = data['id'];
      }
    );

    if (this.orderId != null) {
      this.orderService.getOrder(this.orderId)
        .subscribe(data => {
          this.order.setValue({
            productName: data.productName,
            productBrand: data.productBrand,
            productPrice: data.productPrice,
            productRating: data.productRating,
            productDescription: data.productDescription
          })
        });
    }
    console.log(this.order.value);
  }


  order = new FormGroup({
    productName: new FormControl('', Validators.required),
    productBrand: new FormControl('', Validators.required),
    productPrice: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    productRating: new FormControl('', Validators.required),
    productDescription: new FormControl('', Validators.required)
  });

  onSubmit() {

    let order = new Order
      (this.order.get('productName').value,
        this.order.get('productBrand').value,
        this.order.get('productPrice').value,
        this.order.get('productRating').value,
        this.order.get('productDescription').value);

    if (this.orderId == null) {
      this.orderService.postOrder(order).subscribe();
      alert('successfully added')
      this.route.navigate(["/view"])
    }
    if (this.orderId != null) {
      this.orderService.updateOrder(this.orderId, order)
        .subscribe();
      alert('successfully updated')
      this.route.navigate(["/view"])
    }
  }
}
