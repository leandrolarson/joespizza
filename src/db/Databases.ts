import Product from "../model/Product";
import Pizza from "../model/Pizza";
import Drink from "../model/Drink";
import Client from "../model/Client";
import Order from "../service/Order";

export default class Databases {
  private _products: Product[];
  private _clients: Client[];
  private _orders: Order[];

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

  public getAllProducts(): Product[] {
    return this._products;
  }

  public getAllClients(): Client[] {
    return this._clients;
  }

  public placeOrder(): Order[] {
    return this._orders;

  }

}
