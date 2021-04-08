import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserDto } from 'src/app/models/userDto';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  email:string;
 userInfo:UserDto;
  dataLoaded:Boolean = false;
  constructor(private userService:UserService,private toastrService:ToastrService,private localStorageService:LocalStorageService) { 
    let mail=JSON.stringify(this.localStorageService.getItem("email")).replace(/^"|"$/g, '');
  
    if(this.isLoggedIn()){

      this.getUserInfo(mail);
this.dataLoaded=true;
    }
  }
  
  ngOnInit(): void {
  
  }

  isLoggedIn() {
    return this.userService.isAuthenticated();
    
  }
  logOut(){
    this.userService.logOut();
  }
  getUserInfo(email:string){
  this.userService.getUserInfo(email).subscribe(response=>{
    
    this.userInfo=response.data;
    
  },responseError => {
    console.log(responseError)
    this.toastrService.error(responseError.error)
  })
  
  }
 

}
