import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';


import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetailDto[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];
  currentBrand:number;
  imageUrl="https://localhost:44384/";
  
  dataLoaded=false;
  filterText="";
  brandFilter: number;
  colorFilter: number;
  messaage:string="";
 
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private brandService:BrandService,private colorService:ColorService,private toastrService:ToastrService) { 
    
  }

  ngOnInit(): void {

this.activatedRoute.params.subscribe(params=>{

  if(params["colorId"] && params["brandId"]){
    this.getCarByFilter(params["brandId"],params["colorId"]);
  } else
if(params["brandId"]){
  this.getCarsByBrandId(params["brandId"]);
  this.getBrands();
  this.getColors();
  
}else if(params["colorId"]){
  this.getCarsByColorId(params["colorId"]);
  this.getBrands();
  this.getColors();
} else
{
  this.getCars();
  this.getBrands();
  this.getColors();
 
}
});

  }
getCars(){
  
this.carService.getCars().subscribe(response=>{
this.cars=response.data;
this.dataLoaded=true;
this.toastrService.success("Cars Listed");

});

}

getCarsByBrandId(brandId:number){
  this.carService.getCarsByBrandId(brandId).subscribe(response=>{
  this.cars=response.data;
  this.dataLoaded=true;
  });
  }
  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
    this.cars=response.data;
    this.dataLoaded=true;
    });
    }
    getCarsByCarId(carId:number){
      this.carService.getCarsByCarId(carId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
      });
      }
      getBrands(){
        this.brandService.getBrands().subscribe(response=>{
          this.brands=response.data;
        })
           
       }
       getColors(){
        this.colorService.getColors().subscribe(response=>{
        this.colors=response.data;
        });
        }
        getCarByFilter(brandId:number, colorId: number) {
          this.carService.getCarByBrandAndColor(brandId,colorId).subscribe(response => {
            this.cars = response.data,
            this.dataLoaded = true
            if(this.cars.length == 0){
             console.log("Sonuç bulunamadı");
            }
          })
          
        }
      
       
}
