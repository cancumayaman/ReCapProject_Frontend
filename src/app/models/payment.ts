export interface Payment{
  id:number,
  cardNumber:string,
  expirationDate:string,
  securityCode:number,
  price:number,
  customerId:number,
  cardOwner:string
}