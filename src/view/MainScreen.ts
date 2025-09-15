import * as prompts from "prompts";
import ClientView from "./ClientView";
import OrderView from "./OrderView";
import MainController from "../control/MainController";

export default class MainView {
  private mainController: MainController;

  constructor(mainController: MainController) {
    this.mainController = mainController;
    this.mainMenu();
  }

  private async mainMenu(): Promise<void> {
    let continues = true;

    while (continues) {
      const response = await prompts({
        type: "select",
        name: "choice",
        message: "O que você gostaria de fazer?",
        choices: [
          { title: "Fazer um novo pedido", value: "order" },
          { title: "Gerenciar clientes", value: "client" },
          { title: "Gerenciar produtos", value: "product" },
          { title: "Sair", value: "exit" },
        ],
      });

      switch (response.choice) {
        case "order":
          new OrderView(this.mainController).start();
          break;
        case "client":
          new ClientView(this.mainController).start();
          break;
        case "product":
          new ClientView(this.mainController).start();
          break;
        case "exit":
          continues = false;
          break;
        default:
          console.log("Opção inválida. Por favor, tente novamente.");
          break;
      }
    }
  }
}
