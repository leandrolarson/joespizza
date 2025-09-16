import { v4 as uuidv4 } from "uuid";
import Client from "../model/Client";
import Product from "../model/Product";

enum OrderStatus {
  aceito,
  preparo,
  pronto,
  finalizado,
}

export default class Order {
  private _id: string;
  private _client: Client;
  private _products: Product[];
  private _total: number;
  private _status: OrderStatus;

  constructor(client: Client) {
    this._id = uuidv4();
    this._client = client;
    this._products = [];
    this._total = 0;
    this._status = OrderStatus.aceito;
  }

  public addProduct(product: Product): void {
    this._products.push(product);
    this.calculateTotal();
  }

  private calculateTotal(): void {
    this._total = this._products.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }

  public get id(): string {
    return this._id;
  }

  public get client(): Client {
    return this._client;
  }

  public get products(): Product[] {
    return this._products;
  }

  public get total(): number {
    return this._total;
  }

  public get status(): OrderStatus {
    return this._status;
  }

  public set status(newStatus: OrderStatus) {
    this._status = newStatus;
  }
}
