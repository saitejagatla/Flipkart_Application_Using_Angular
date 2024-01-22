import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { GroceryComponent } from './grocery/grocery.component';
import { PumaComponent } from './puma/puma.component';
import { LgComponent } from './lg/lg.component';
import { ProfileComponent } from './profile/profile.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'after-login',component:AfterLoginComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'grocery',component:GroceryComponent},
  {path:'puma',component:PumaComponent},
  {path:'lg',component:LgComponent},
  {path:'profile',component:ProfileComponent},
  {path:'reg',component:RegComponent},
  {path : '', redirectTo: '/home', pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
