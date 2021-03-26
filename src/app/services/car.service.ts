import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import {ListResponseModel} from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44384/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetailDto>> {
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
    }
    getCarById(carId:number):Observable<SingleResponseModel<Car>> {
      let newPath=this.apiUrl+"cars/getbycarid?id="+carId;
      return this.httpClient.get<SingleResponseModel<Car>>(newPath);
      }
   
    getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetailDto>> {
      let newPath=this.apiUrl+"cars/getcardetailsbybrand?brandId="+brandId;
      return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
      }
      getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetailDto>> {
        let newPath=this.apiUrl+"cars/getcardetailsbycolor?colorId="+colorId;
        return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
        }
        getCarsByCarId(carId:number):Observable<ListResponseModel<CarDetailDto>> {
          let newPath=this.apiUrl+"cars/getcardetails?id="+carId;
          return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
          }
          getCarByBrandAndColor(brandId:number,colorId:number):Observable<ListResponseModel<CarDetailDto>>{
            let newPath = this.apiUrl +`cars/getbybrandandcolor?brandId=${brandId}&colorId=${colorId}`;
            return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
          }
          addCar(car:Car):Observable<ResponseModel>{
           return  this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car);
          }
          updateCar(car:Car):Observable<ResponseModel>{
            return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/update",car);
          }
         

}
