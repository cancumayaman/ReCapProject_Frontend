import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1={Id:1,Name:"Clio",Brand:"Renault",Price:100000}
  car2={Id:2,Name:"Polo",Brand:"Wolsvagen",Price:200000}
  car3={Id:3,Name:"Fiesta",Brand:"Ford",Price:50000}
  
  cars=[
    this.car1,this.car2,this.car3
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
