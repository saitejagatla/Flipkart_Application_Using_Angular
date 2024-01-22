import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { FormsModule } from '@angular/forms';
import { ElectronicsComponent } from './electronics/electronics.component';
import { DiscountPipe } from './discount.pipe';
import { CartComponent } from './cart/cart.component';
import { GroceryComponent } from './grocery/grocery.component';
import { PumaComponent } from './puma/puma.component';
import { LgComponent } from './lg/lg.component';
import { ProfileComponent } from './profile/profile.component';
import { RegComponent } from './reg/reg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AfterLoginComponent,
    ElectronicsComponent,
    DiscountPipe,
    CartComponent,
    GroceryComponent,
    PumaComponent,
    LgComponent,
    ProfileComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
