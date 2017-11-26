import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRouteModule } from './app-route.module';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider } from 'angular4-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { config } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './components/items/items.component';
import { HeaderComponent } from './pages/header/header.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';

import { ItemdetailsService } from './services/itemdetails.service';
import { ItemsService } from './services/items.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    LoginComponent,
    ItemdetailsComponent,
  ],
  exports: [
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouteModule,
    SocialLoginModule.initialize(config),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ItemsService,
    ItemdetailsService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
