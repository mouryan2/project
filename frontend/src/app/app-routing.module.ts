import { AuthGuard } from './shared/guards/auth.guard';
import { ViewOrdersComponent } from './order/view-orders/view-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: "", redirectTo: "order", pathMatch: "full" },
  { path: "order", component: CreateOrderComponent, canActivate: [AuthGuard] },
  { path: "order/:id", component: CreateOrderComponent, canActivate: [AuthGuard] },
  { path: "view", component: ViewOrdersComponent, canActivate: [AuthGuard] },
  { path: "auth", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
