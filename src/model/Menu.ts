import Product from "./Product";
import Pizza from "./Pizza";
import Drink from "./Drink";

export default class Menu {
  private _pizzas: Pizza[];
  private _drinks: Drink[];

  constructor() {
    this._pizzas = [];
    this._drinks = [];
  }

  public addPizza(pizza: Pizza): void {
    this._pizzas.push(pizza);
  }

  public addDrink(drink: Drink): void {
    this._drinks.push(drink);
  }

  public get pizzas(): Pizza[] {
    return this._pizzas;
  }

  public get drinks(): Drink[] {
    return this._drinks;
  }
}
