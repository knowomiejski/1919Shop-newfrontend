export class CartModel {

  private userBasketID: number;
  private productBasketID: number;
  private amount: number;

  constructor(userID: number, productID: number, amount: number) {
    this.userBasketID = userID;
    this.productBasketID = productID;
    this.amount = amount;
  }
}
