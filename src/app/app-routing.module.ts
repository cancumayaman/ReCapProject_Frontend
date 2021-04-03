import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  
  { path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/getcardetailsbybrand/:brandId",component:CarComponent},
  {path:"cars/getcardetailsbycolor/:colorId",component:CarComponent},
 
  {path:"cars/getcardetails/:carId",component:CarDetailComponent},
  {path:"cars/getbybrandandcolor/:brandId/:colorId",component:CarComponent},
  {path:"cars/rental/:carId",component:RentCarComponent},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"brands/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"colors/add",component:ColorAddComponent,canActivate:[LoginGuard]},
  {path:"cars/update/:carId",component:CarUpdateComponent},
  {path:"cars/payment",component:PaymentComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
