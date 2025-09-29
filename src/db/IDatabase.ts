import Product from "../model/Product";
import Client from "../model/Client";
import Order from "../service/Order";

export interface IDatabase {
  addClient(client: Client): void;
  addProduct(product: Product): void;
  get products(): Product[];
  getAllClients(): Client[];
  placeOrder(order: Order): void;
}
