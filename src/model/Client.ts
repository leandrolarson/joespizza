export default class Client {
  private _name: string;
  private _address: string;
  private _phone: string;

  constructor(name: string, address: string, phone: string) {
    this._name = name;
    this._address = address;
    this._phone = phone;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }

  public get phone(): string {
    return this._phone;
  }
  public set phone(value: string) {
    this._phone = value;
  }
}
