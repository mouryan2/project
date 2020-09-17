import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { OrderInterceptor } from './order.interceptor';

describe('OrderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    providers: [
      OrderInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: OrderInterceptor = TestBed.inject(OrderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
