import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserDto } from 'src/app/models/userDto';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info-update',
  templateUrl: './user-info-update.component.html',
  styleUrls: ['./user-info-update.component.css']
})
export class UserInfoUpdateComponent implements OnInit {

  email:string;
  user:UserDto;
  userUpdateForm:FormGroup;
 
  constructor(private localStorageService:LocalStorageService,private router:Router, private userService:UserService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.email=JSON.stringify(this.localStorageService.getItem("email")).replace(/^"|"$/g, '');
    this.getUser();
    this.createUserUpdateForm();
  }
  createUserUpdateForm(){
    this.userUpdateForm=this.formBuilder.group({
      firstName:[{},Validators.required],
      lastName:[{},Validators.required],
      email:[{},Validators.required],
      password:[{},Validators.required],
      confirmPassword:[]
    })
  }
  getUser(){
this.userService.getUserInfo(this.email).subscribe(response=>{
this.user=response.data;

});
  }
  
updateUser(){

    if (this.userUpdateForm.value['password'] != this.userUpdateForm.value['confirmPassword']) {
         this.toastrService.warning('Şifreler uyuşmuyor', 'Dikkat');
         return;
      }
     
  if(this.userUpdateForm.valid){
    let userModel=Object.assign({},this.userUpdateForm.value);
    this.userService.update(userModel).subscribe(response=>{
      this.toastrService.success("Your information successfully updated");
      setTimeout(()=>{
        this.router.navigate(['cars']);
      },2000)
    },
    responseError=>{
      this.toastrService.error("Validation error");
    }
    )
  }
  
}

}
