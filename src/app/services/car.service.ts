import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import {ListResponseModel} from '../models/ListResponseModel';


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

}
