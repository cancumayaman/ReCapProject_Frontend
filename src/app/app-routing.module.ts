import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';

const routes: Routes = [
  
  { path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/getcardetailsbybrand/:brandId",component:CarComponent},
  {path:"cars/getcardetailsbycolor/:colorId",component:CarComponent},
 
  {path:"cars/getcardetails/:carId",component:CarDetailComponent},
  {path:"cars/getbybrandandcolor/:brandId/:colorId",component:CarComponent},
  {path:"cars/rental/:carId",component:RentCarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
