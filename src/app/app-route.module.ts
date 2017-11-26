import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';
import { ItemsComponent } from './components/items/items.component';
import { LoginComponent } from './login/login.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'dashboard', component: ItemsComponent },
  { path: 'items/:id', component: ItemdetailsComponent },
  { path: 'cartview', component: CartComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouteModule { }
