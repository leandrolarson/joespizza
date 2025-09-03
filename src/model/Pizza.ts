import Product from "./Product";

export default class Pizza extends Product {
  private _size: string;
  private _crust: string;

  constructor(
    name: string,
    description: string,
    price: number,
    size: string,
    crust: string
  ) {
    super(name, description, price);

    this._size = size;
    this._crust = crust;
  }

  public get size(): string {
    return this._size;
  }
  public set size(value: string) {
    this._size = value;
  }

  public get crust(): string {
    return this._crust;
  }
  public set crust(value: string) {
    this._crust = value;
  }
}
