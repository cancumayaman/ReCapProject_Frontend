import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Login } from '../models/login';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import{User} from '../models/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:44384/api/Auth/";
  constructor(private httpClient:HttpClient) { }

  addUser(user:User){
   return this.httpClient.post(this.apiUrl+"register",user);
  }
  loginUser(loginUser:Login){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginUser);
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

}
