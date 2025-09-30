import Product from "../model/Product";
import Client from "../model/Client";
import MainScreen from "../view/MainScreen";
import { IDatabase } from "../db/IDatabase";

export default class MainController {
  //public db: Database = new Database(); alto acoplamento!

  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
    new MainScreen(this);
  }

  public registerProduct(
    _name: string,
    _description: string,
    _price: number
  ): void {
    const newProduct = new Product(_name, _description, _price);
    this.db.addProduct(newProduct);
  }

  public getNewClient(_name: string, _address: string, _phone: string): Client {
    return new Client(_name, _address, _phone);
  }
}
