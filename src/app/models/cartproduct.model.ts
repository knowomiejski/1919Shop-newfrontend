import {ProductModel} from './product.model';

export class CartproductModel {

  private _product;
  private _amount;

  constructor(product: ProductModel,
              amount: number) {
    this._product = product;
    this._amount = amount;
  }


  get product() {
    return this._product;
  }

  set product(value) {
    this._product = value;
  }


  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }
}
