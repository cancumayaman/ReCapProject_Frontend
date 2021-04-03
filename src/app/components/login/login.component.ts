import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private userService:UserService,private toastrService:ToastrService,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
createLoginForm(){
  this.loginForm=this.formBuilder.group({
    email:["",Validators.required],
    password:["",Validators.required]
  })
}
login(){
  if(this.loginForm.valid){
    let loginModel=Object.assign({},this.loginForm.value);
    this.userService.loginUser(loginModel).subscribe(response=>{

      this.toastrService.info(response.message);
      localStorage.setItem("token",response.data.token);
      setTimeout(()=>{
this.route.navigateByUrl("cars");
      },2000)
    },
    responseError=>{
      this.toastrService.error(responseError.error);
    }
    )
  }else{
    this.toastrService.error("Please enter valid form");
  }
}
}
