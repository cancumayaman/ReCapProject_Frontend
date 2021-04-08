import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { ListResponseModel } from '../models/ListResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  apiUrl="https://localhost:44384/api/CreditCards/";
  constructor(private httpClient:HttpClient) { }
addCreditCard(creditCard:CreditCard){
  return this.httpClient.post(this.apiUrl+"add",creditCard);
}
getAll():Observable<ListResponseModel<CreditCard>>{
  return this.httpClient.get<ListResponseModel<CreditCard>>(this.apiUrl+"getall");
}
getByCardId(cardNumber:string):Observable<SingleResponseModel<CreditCard>>{
  return this.httpClient.get<SingleResponseModel<CreditCard>>(this.apiUrl+"getbycardid?cardNumber="+cardNumber);
}
deleteCard(creditCard:CreditCard){
  return this.httpClient.post(this.apiUrl+"delete",creditCard)
}
updateCard(creditCard:CreditCard){
  return this.httpClient.post(this.apiUrl+"update",creditCard)
}

}
