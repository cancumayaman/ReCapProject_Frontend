import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { RentCar } from 'src/app/models/rentCar';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  cars:CarDetailDto[]=[];
  dataLoaded=false;
  customers:Customer[];
  startDate:Date;
  endDate:Date;
  carid:number;
  customerId:number;
  rentPrice:number = 0;
  rental:RentCar;
  
  rentable:Boolean = false;
  message:string="";
  imageUrl="https://localhost:44384/";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private rentalService:RentalService, private router:Router,private customerService:CustomerService,private toastrService:ToastrService) { 

  }

  ngOnInit(): void {
    this.getCustomers();
    this.activatedRoute.params.subscribe(params=>{
      
      if(params["carId"]){
        this.getCarsByCarId(params["carId"]);
        
       // this.printDate();
      }
     
      });
     
  }
 

  getCarsByCarId(carId:number){
    this.carService.getCarsByCarId(carId).subscribe(response=>{
    this.cars=response.data;
    this.dataLoaded=true;
   
    });
    }
    
   /*
    printDate() {
      console.log(this.startDate);
      console.log(this.endDate);
    }
    */
    setDate(date:any, e:any) {
      date === "start" ? (this.startDate = e) : (this.endDate = e);
      //this.printDate();
    }
    getCustomers(){
this.customerService.getCustomers().subscribe(response=>{
  this.customers=response.data;
})
    }
    
    addRental(){
    
          this.rental={
            carId:this.cars[0].id,
            customerId:1,
            rentDate:this.startDate,
            returnDate:this.endDate
          }
     
      this.rentalService.addRental(this.rental).subscribe(response=>{
        this.toastrService.success("You are redirected to the payment system","Successfull");
setTimeout(() => 
{
  this.router.navigateByUrl('cars/payment');
},
2000);
       
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Errors");
            
          }
         
        }
       
      });
    }

}
