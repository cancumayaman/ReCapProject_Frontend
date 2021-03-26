import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,Validators,FormGroup} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';

import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private brandService:BrandService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }
  createBrandAddForm(){
this.brandAddForm=this.formBuilder.group({
  name:["",Validators.required]
});
  }
  add(){
    if(this.brandAddForm.valid){
      let brandModel=Object.assign({},this.brandAddForm.value);
      this.brandService.addBrand(brandModel).subscribe(response=>{
        this.toastrService.success("Brand added successfully",brandModel.name)
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Errors");
            
          }
         
        }
       
      })
    }else{
      this.toastrService.error("Please add valid brand");
    }
  }

}
