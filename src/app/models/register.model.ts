export class RegisterModel {

  private email: string;
  private passwd: string;
  private province: string;
  private city: string;
  private street: string;
  private housenr: string;


  constructor(_email: string, _passwd: string, _province: string, _city: string, _street: string, _housenr: string) {
    this.email = _email;
    this.passwd = _passwd;
    this.province = _province;
    this.city = _city;
    this.street = _street;
    this.housenr = _housenr;
  }
}
