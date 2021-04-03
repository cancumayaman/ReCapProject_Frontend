import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import {FormBuilder,FormControl,FormGroup,Validators} from "@angular/forms"
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentFormGroup:FormGroup;
  constructor(private paymentService:PaymentService,private toastrService:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.paymentFormGroup=this.formBuilder.group({
      
      cardNumber:["",Validators.required],
      expirationDate:["",Validators.required],
      securityCode:["",Validators.required],
      price:100,
      customerId:["",Validators.required],
      cardOwner:["",Validators.required]
    });
  }
  addPayment(){
    if(this.paymentFormGroup.valid){
      let paymentModel=Object.assign({},this.paymentFormGroup.value);
      this.paymentService.addPayment(paymentModel).subscribe(response=>{
        this.toastrService.success("payment successful");
      },
      responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.console.error.Errors.length;i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Payment Error");
       
          }
        }
      }
 
      )
    }
    
   
  }
}
