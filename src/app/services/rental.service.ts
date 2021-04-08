import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';
import { RentCar } from '../models/rentCar';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44384/api/Rentals/";
  constructor(private httpClient:HttpClient) { }
  
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"getrentaldto";
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"getrentaldto");
  }
  addRental(rental:RentCar){
    let newPath=this.apiUrl+"add";
    return this.httpClient.post<ListResponseModel<Rental>>(newPath,rental);
  }
}
