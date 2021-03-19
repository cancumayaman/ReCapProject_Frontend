import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  cars:CarDetailDto[]=[];
  dataLoaded=false;
  imageUrl="https://localhost:44384/";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarsByCarId(params["carId"]);
      }
      });
  }

  getCarsByCarId(carId:number){
    this.carService.getCarsByCarId(carId).subscribe(response=>{
    this.cars=response.data;
    this.dataLoaded=true;
    });
    }
}
