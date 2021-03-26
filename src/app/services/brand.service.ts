import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import {ListResponseModel} from '../models/ListResponseModel'


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44384/api/Brands/";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>> {
   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl+"getall");
  }
  addBrand(brand:Brand){
    return this.httpClient.post(this.apiUrl+"add",brand);
  }
}
