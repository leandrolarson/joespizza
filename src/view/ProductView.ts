import * as prompts from "prompts";
import MainController from "../control/MainController";

export default class ProductView {
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
          { title: "Cadastrar novo produto", value: "register" },
          { title: "Listar todos os produtos", value: "list" },
          { title: "Voltar ao menu principal", value: "back" },
        ],
      });

      switch (response.choice) {
        case "register":
          await this.registerProduct();
          break;
        case "list":
          this.listProducts();
          break;
        case "back":
          continues = false;
          break;
      }
    }
  }

  private async registerProduct(): Promise<void> {
    const response = await prompts([
      {
        type: "text",
        name: "name",
        message: "Nome do produto:",
      },
      {
        type: "text",
        name: "description",
        message: "Descrição do Produto:",
      },
      {
        type: "number",
        name: "price",
        message: "Preço do Produto:",
      },
    ]);

    if (response.name && response.description && response.price) {
      this.mainController.registerProduct(
        response.name,
        response.description,
        response.price
      );
      console.log("\n✅ Produto cadastrado com sucesso!");
    } else {
      console.log("\n❌ Erro: Todos os campos são obrigatórios.");
    }
  }

  private listProducts(): void {
    const products = this.mainController.db.products;
    console.log("\n--- Lista de Produtos ---");
    products.forEach((product) => {
      console.log(
        `\nNome: ${product.name}\nDescrição: ${product.description}\nPreço: ${product.price}`
      );
    });
    console.log("-------------------------\n");
  }
}
