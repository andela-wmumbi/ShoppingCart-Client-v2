import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { HeaderComponent } from './pages/header/header.component';
import { ItemsService } from './services/items.service';
import { AppRouteModule } from './app-route.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent
  ],
  exports: [
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouteModule,
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
