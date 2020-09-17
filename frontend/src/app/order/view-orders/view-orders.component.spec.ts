import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewOrdersComponent } from './view-orders.component';
import { OrderService } from 'src/app/shared/services/order.service';
import { Order } from 'src/app/shared/models/order.model';
import { Observable, of } from 'rxjs';

describe('ViewOrdersComponent', () => {
  let component: ViewOrdersComponent;
  let fixture: ComponentFixture<ViewOrdersComponent>;
  let orderService: OrderService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ViewOrdersComponent],
      providers: [
        { provide: OrderService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(inject([OrderService],() => {
    fixture = TestBed.createComponent(ViewOrdersComponent);
    component = fixture.componentInstance;
    orderService =fixture.debugElement.injector.get(OrderService);
    fixture.detectChanges();
  }));

  let order: Order = {
    productName: "nokia6", productBrand: "nokia", productDescription: "it's okk", productPrice: 10000, productRating: 5
  }
  let orders: Order[] = [order];

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should delete order ", async () => {
    let spy = spyOn(orderService, 'deleteOrder').and.returnValue(of(order));
    await component.deleteOrder('1');
    expect(spy).toHaveBeenCalled();
  })

  it("should get orders ", () => {
    let spy = spyOn(orderService, 'getOrders').and.returnValue(of(orders));
    component.orderDetails();
    expect(spy).toHaveBeenCalled();
  })


});
