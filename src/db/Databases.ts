import Product from "../model/Product";
import Client from "../model/Client";
import Order from "../service/Order";
import { IDatabase } from "./IDatabase";

export default class Databases implements IDatabase {
  private _products: Product[];
  private _clients: Client[];
  private _orders: Order[];

  constructor() {
    this._products = [];
    this._clients = [];
    this._orders = [];
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

  public getAllClients(): Client[] {
    return this._clients;
  }

  public placeOrder(order: Order): void {
    this._orders.push(order);
  }
}
