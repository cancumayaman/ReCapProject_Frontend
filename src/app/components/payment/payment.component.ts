import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import {FormBuilder,FormControl,FormGroup,Validators} from "@angular/forms"
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CreditCard } from 'src/app/models/creditCard';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentFormGroup:FormGroup;
  constructor(private paymentService:PaymentService,private router:Router, private toastrService:ToastrService,private formBuilder:FormBuilder,private creditCardService:CreditCardService) { }
  cardStatus:boolean=false;
  creditCard:CreditCard;
  cardNumber:string;
  cards:CreditCard[]=[];
  selectedCard:CreditCard;
  ngOnInit(): void {
    this.createAddForm();
    this.getCards();
    
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
  getCards(){
    this.creditCardService.getAll().subscribe(response=>{
      this.cards=response.data;
    })
  }
  addPayment(){
    
    if(this.paymentFormGroup.valid){
      let paymentModel=Object.assign({},this.paymentFormGroup.value);
     
      this.paymentService.addPayment(paymentModel).subscribe(response=>{
        this.creditCardService.getByCardId(paymentModel.cardNumber).subscribe(response=>{
          
          if(response.data==null){
            
            if (window.confirm('Would you like to save your credit card for next shoppings?')) {
              this.saveCreditCard();
            }else{
              this.router.navigate(['/cars/payment']);
            }
            this.toastrService.success("Payment successfull");
            setTimeout(()=>{
              this.router.navigate(['cars']);
            },2000)
            
           
          }else{
            
             this.toastrService.success("Payment successfull");
            setTimeout(()=>{
              this.router.navigate(['cars']);
            },2000)
          }
        })
         
        
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
  setCurrentCard(){
    
    this.paymentFormGroup.setValue({
        
      cardNumber:this.selectedCard.cardNumber,
      expirationDate:this.selectedCard.expirationDate,
      securityCode:this.selectedCard.securityCode,
      price:100,
      customerId:1,
      cardOwner:this.selectedCard.cardOwner
      
    })
    
   
  }
 
  saveCreditCard(){
    this.creditCard=Object.assign({},this.paymentFormGroup.value);
   this.creditCardService.addCreditCard(this.creditCard).subscribe(response=>{
     this.toastrService.success("Credit Card Added Successfully");
   },
   responseError=>{
     this.toastrService.error(responseError);
   })
  }
 
}