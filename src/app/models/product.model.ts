
export class ProductModel {
  private _productID;
  private _name;
  private _description;
  private _price;
  private _picture;

  constructor(productID: number,
              name: string,
              description: string,
              price: number,
              picture: string) {
    this._productID = productID;
    this._name = name;
    this._description = description;
    this._price = price.toFixed(2);
    this._picture = picture;
  }

  get productID() {
    return this._productID;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get price() {
    return this._price;
  }

  get picture() {
    return this._picture;
  }
}
