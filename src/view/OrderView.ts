// src/view/OrderView.ts

import * as prompts from "prompts";
import MainController from "../control/MainController";
import Order from "../service/Order"; // Importação da classe Order
import Client from "../model/Client"; // Importação da classe Client

export default class OrderView {
  private mainController: MainController;

  constructor(mainController: MainController) {
    this.mainController = mainController;
  }

  public async start(): Promise<void> {
    console.log("\n--- Novo Pedido ---");

    // Passo 1: Selecionar o cliente
    const clients = this.mainController.db.getAllClients();
    if (clients.length === 0) {
      console.log(
        "\n❌ Nenhum cliente cadastrado. Por favor, cadastre um cliente primeiro."
      );
      return;
    }

    const clientChoices = clients.map((c) => ({ title: c.name, value: c }));
    const clientResponse = await prompts({
      type: "select",
      name: "client",
      message: "Selecione o cliente para o pedido:",
      choices: clientChoices,
    });

    const selectedClient: Client = clientResponse.client;
    const newOrder = new Order(selectedClient); // Criação do novo pedido

    // Passo 2: Selecionar os produtos
    let addingProducts = true;
    while (addingProducts) {
      const products = this.mainController.db.getAllProducts();
      const choices = products.map((p) => ({
        title: `${p.name} - R$ ${p.price.toFixed(2)}`,
        value: p,
      }));

      const response = await prompts({
        type: "select",
        name: "product",
        message: "Selecione um produto para adicionar ao pedido:",
        choices: [...choices, { title: "Finalizar Pedido", value: "finish" }],
      });

      if (response.product === "finish") {
        addingProducts = false;
      } else {
        const selectedProduct = response.product;
        if (selectedProduct) {
          newOrder.addProduct(selectedProduct); // Adiciona o produto ao pedido
          console.log(`\n"${selectedProduct.name}" adicionado ao pedido.`);
        }
      }
    }

    // Passo 3: Finalizar o pedido
    if (newOrder.products.length > 0) {
      this.mainController.db.placeOrder(newOrder); // Chamada corrigida, passando o objeto 'newOrder'
      console.log("\n✅ Pedido realizado com sucesso!");
    } else {
      console.log("\n❌ Nenhum produto adicionado. Pedido cancelado.");
    }
  }
}
