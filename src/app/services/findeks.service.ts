import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindeksDto } from '../models/findeks';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FindeksService {
  apiUrl="https://localhost:44384/api/Findeks/";
  constructor(private httpClient:HttpClient) { }

calculateFindeks(identityNumber:number,carId:number){
return this.httpClient.get(this.apiUrl+"calculate?identityNumber="+identityNumber+"&carId="+carId);
}

}
