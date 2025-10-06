// src/view/ClientView.ts

import * as prompts from "prompts";
import MainController from "../control/MainController";

export default class ClientView {
  private mainController: MainController;

  constructor(mainController: MainController) {
    this.mainController = mainController;
  }

  public async start(): Promise<void> {
    let continues = true;

    while (continues) {
      const response = await prompts({
        type: "select",
        name: "choice",
        message: "O que você gostaria de fazer?",
        choices: [
          { title: "Cadastrar novo cliente", value: "register" },
          { title: "Listar todos os clientes", value: "list" },
          { title: "Voltar ao menu principal", value: "back" },
        ],
      });

      switch (response.choice) {
        case "register":
          await this.registerClient();
          break;
        case "list":
          this.listClients();
          break;
        case "back":
          continues = false;
          break;
      }
    }
  }

  private async registerClient(): Promise<void> {
    const response = await prompts([
      {
        type: "text",
        name: "name",
        message: "Nome do cliente:",
      },
      {
        type: "text",
        name: "address",
        message: "Endereço do cliente:",
      },
      {
        type: "text",
        name: "phone",
        message: "Telefone do cliente (ex: (41) 98765-4321):",
      },
    ]);

    if (response.name && response.address && response.phone) {
      this.mainController.getNewClient(
        response.name,
        response.address,
        response.phone
      );
      console.log("\n✅ Cliente cadastrado com sucesso!");
    } else {
      console.log("\n❌ Erro: Todos os campos são obrigatórios.");
    }
  }

  private listClients(): void {
    const clients = this.mainController.getAllClients();
    console.log("\n--- Lista de Clientes ---");
    clients.forEach((client) => {
      console.log(
        `\nNome: ${client.name}\nEndereço: ${client.address}\nTelefone: ${client.phone}`
      );
    });
    console.log("-------------------------\n");
  }
}
