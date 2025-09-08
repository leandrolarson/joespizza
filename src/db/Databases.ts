import Product from "../model/Product";
import Pizza from "../model/Pizza";
import Drink from "../model/Drink";
import Client from "../model/Client";

export default class Databases {
  private _products: Product[];
  private _clients: Client[];

  constructor() {
    this._products = [];
  }

  public addClient(client: Client): void {
    this._clients.push(client);
  }

  public addProduct(product: Product): void {
    this._products.push(product);
  }

  public get products(): Product[] {
    return this._products;
  }
}
