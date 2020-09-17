import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { OrderInterceptor } from './shared/interceptors/order.interceptor';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { ViewOrdersComponent } from './order/view-orders/view-orders.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthComponent } from './auth/auth.component'
@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    ViewOrdersComponent,
    HeaderComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule, MatToolbarModule, MatTabsModule, MatIconModule, MatTableModule, MatPaginatorModule, MatFormFieldModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: OrderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
