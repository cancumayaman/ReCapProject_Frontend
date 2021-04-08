import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Login } from '../models/login';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import{User} from '../models/user'
import { UserDto } from '../models/userDto';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:44384/api/Auth/";
  userApiUrl="https://localhost:44384/api/Users/";
  email:string;
 
  constructor(private httpClient:HttpClient,private toastrService:ToastrService,private localStoregeService:LocalStorageService) { }

  addUser(user:User){
   return this.httpClient.post(this.apiUrl+"register",user);
  }
  loginUser(loginUser:Login){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginUser);
  }
  logOut(){
   this.localStoregeService.clear();
    this.toastrService.success("Successfully logout, redirect to home page");
    setTimeout(()=>{
      window.location.href="";
    },2000);
  
  }

  isAuthenticated(){
    if(this.localStoregeService.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
  getUserInfo(mail:string){
    return  this.httpClient.get<SingleResponseModel<UserDto>>(this.userApiUrl+"getbymail?mail="+mail);
  }
  update(user:User){
    return this.httpClient.post(this.userApiUrl+"update",user);
  }

}
