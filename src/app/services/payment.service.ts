import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl="https://localhost:44384/api/payments/add";
  constructor(private httpClient:HttpClient) { }
  addPayment(payment:Payment){
    return this.httpClient.post(this.apiUrl,payment);
  }
}
