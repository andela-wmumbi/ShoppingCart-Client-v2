import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';
import { ItemsComponent } from './components/items/items.component';

const appRoutes: Routes = [
  { path: 'home', component: ItemsComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouteModule { }
