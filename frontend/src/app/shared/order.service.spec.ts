import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrderService } from './order.service';
import { Order } from './order.model';

describe('OrderService', () => {

  let service: OrderService;
  let httptestCntrl: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OrderService);
    httptestCntrl = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httptestCntrl.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  let order: Order = {
    productName: "nokia6", productBrand: "nokia", productDescription: "it's okk", productPrice: 10000, productRating: 5
  }
  let orders: Order[] = [order];

  it("should check get all orders ", () => {
    service.getOrders().subscribe(res => {
      expect(res).toEqual(orders);
    })
    let req = httptestCntrl.expectOne('http://localhost:8080/order');
    expect(req.request.method).toBe('GET');
    req.flush(orders);
  })

  it("should check get order by id ", () => {
    service.getOrder('1').subscribe(res => {
      expect(res).toEqual(order);
    })
    let req = httptestCntrl.expectOne('http://localhost:8080/order/id?id=1');
    expect(req.request.method).toBe('GET');
    req.flush(order);
  })

  it("should register an order", () => {
    service.postOrder(order).subscribe();
    let req = httptestCntrl.expectOne('http://localhost:8080/order');
    expect(req.request.method).toBe('POST');
  })

  it("should update an order ", () => {
    service.updateOrder('1', order).subscribe(res => {
      expect(res).toEqual(order)
    })
    let req = httptestCntrl.expectOne('http://localhost:8080/order?id=1');
    expect(req.request.method).toBe('PUT');
    req.flush(order);

  })

  it("should delete order",()=>{
    service.deleteOrder('1').subscribe(res => {
      expect(res).toEqual(order)
    })
    let req = httptestCntrl.expectOne('http://localhost:8080/order?id=1');
    expect(req.request.method).toBe('DELETE');
  })
});
