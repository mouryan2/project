import { ViewOrdersComponent } from './order/view-orders/view-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: "", redirectTo:"order" ,pathMatch:"full"},
  { path: "order", component: CreateOrderComponent },
  { path: "order/:id", component: CreateOrderComponent },
  { path: "view", component: ViewOrdersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
