export class UserModel {

  private _userID: number;
  private _email: string;
  private _roles: string[];

  constructor(userID: number, email: string, roles: string[]) {
    this._userID = userID;
    this._email = email;
    this._roles = roles;
  }

  get userID(): number {
    return this._userID;
  }

  get email(): string {
    return this._email;
  }

  get roles(): string[] {
    return this._roles;
  }
}
