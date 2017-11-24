import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { HeaderComponent } from './pages/header/header.component';
import { ItemsService } from './services/items.service';
import { AppRouteModule } from './app-route.module';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider } from 'angular4-social-login';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { ItemdetailsService } from './services/itemdetails.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('580834220925-ceofkqhqhep1lckuanoagkpg8ngjfkhn.apps.googleusercontent.com')
  }
]);

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
    ReactiveFormsModule
  ],
  providers: [
    ItemsService,
    ItemdetailsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
