import Database from "../db/Databases";
import Product from "../model/Product";
import Client from "../model/Client";
import MainScreen from "../view/MainScreen";

export default class MainController {

    public db: Database = new Database();

    constructor() {
        new MainScreen(this);
    }


    public getNewProduct(_name: string, _description: string, _price: number): Product {
        return new Product(_name, _description, _price);
    }

    public getNewClient(_name: string, _address: string, _phone: string): Client {
        return new Client(_name, _address, _phone);
    }


}