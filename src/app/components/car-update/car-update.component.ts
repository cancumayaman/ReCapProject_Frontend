import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

import { Car } from 'src/app/models/car';
@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  cars:Car;
  carUpdateForm:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,private router:Router, private formBuilder:FormBuilder,private toastrService:ToastrService,private carService:CarService) { }

  
 
  ngOnInit(): void {
    this.createCarUpdateForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarByCarId(params["carId"]);
      }
      });
  }
  getCarByCarId(carId:number){
    this.carService.getCarById(carId).subscribe(response=>{
    this.cars=response.data
    
    });
    }
    
  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
      id:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      name:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    })
  }
  updateCar(){
if(this.carUpdateForm.valid){
  let carUpdateModel=Object.assign({},this.carUpdateForm.value);
  this.carService.updateCar(carUpdateModel).subscribe(response=>{
this.toastrService.success("Car Updated Succesfully",carUpdateModel.name);
setTimeout(() => 
{
  window.location.reload();
},
2000);

  },responseError=>{
    if(responseError.error.Errors.length>0){
      for (let i = 0; i < responseError.error.Errors.length; i++) {
        this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Errors");
      }
     
    }
   
  })
  
}
  }
 
  

}
