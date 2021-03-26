import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';

const routes: Routes = [
  
  { path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/getcardetailsbybrand/:brandId",component:CarComponent},
  {path:"cars/getcardetailsbycolor/:colorId",component:CarComponent},
 
  {path:"cars/getcardetails/:carId",component:CarDetailComponent},
  {path:"cars/getbybrandandcolor/:brandId/:colorId",component:CarComponent},
  {path:"cars/rental/:carId",component:RentCarComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"cars/update/:carId",component:CarUpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
