import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateOrderComponent } from './create-order.component';
import { OrderService } from 'src/app/shared/order.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Order } from 'src/app/shared/order.model';
import { FormGroup } from '@angular/forms';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';
describe('CreateOrderComponent', () => {
  let component: CreateOrderComponent;
  let fixture: ComponentFixture<CreateOrderComponent>;
  let orderService: OrderService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule.withRoutes([
        { path: 'view', component: ViewOrdersComponent }
      ])],
      declarations: [CreateOrderComponent],
      providers: [OrderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {


    fixture = TestBed.createComponent(CreateOrderComponent);
    component = fixture.componentInstance;
    orderService = fixture.debugElement.injector.get(OrderService);
    let order: Order = {
      productName: "nokia6", productBrand: "nokia", productDescription: "it's okk", productPrice: 10000, productRating: 5
    }

    spyOn(orderService, "getOrder").and.returnValue(of(order));
    fixture.detectChanges();
  });


  it("on initializing", () => {

    component.orderId = '2';
    //fixture.detectChanges();
    component.ngOnInit();
    let orderDetails: FormGroup = component.order;
    expect(orderDetails.value.productName).toEqual('nokia6');
    expect(false).toEqual(false);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check onsubmit method', () => {
    let spy = spyOn(orderService, "postOrder").and.callFake(() => { return of(); })
    let spy2 = spyOn(orderService, "updateOrder").and.callFake(() => { return of(); })
    component.onSubmit();
    expect(component).toBeTruthy();
  })




});
