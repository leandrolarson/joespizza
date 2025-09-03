import Product from "./Product";

export default class Drink extends Product {
  private _volume!: number;
  private _type!: string;

  constructor(
    name: string,
    description: string,
    price: number,
    volume: number,
    type: string
  ) {
    super(name, description, price);

    this._volume = volume;
    this._type = type;
  }

  public get volume(): number {
    return this._volume;
  }
  public set volume(value: number) {
    this._volume = value;
  }

  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }
}
