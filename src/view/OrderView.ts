// src/view/OrderView.ts

import prompts from 'prompts';
import MainController from '../control/MainController';

export default class OrderView {

    private mainController: MainController;

    constructor(mainController: MainController) {
        this.mainController = mainController;
    }

    public async start(): Promise<void> {
        console.log('\n--- Novo Pedido ---');
        // Passo 1: Selecionar o cliente (vamos simplificar para este exemplo)
        // Em um sistema real, você listaria os clientes e pediria para o usuário escolher um
        const clientName = await prompts({
            type: 'text',
            name: 'name',
            message: 'Digite o nome do cliente:',
        });

        // Passo 2: Selecionar os produtos
        const productsInOrder = [];
        let addingProducts = true;
        while (addingProducts) {
            const products = this.mainController.db.getAllProducts(); // Método que o controller precisa ter
            const choices = products.map(p => ({ title: `${p.name} - R$ ${p.price.toFixed(2)}`, value: p.name }));

            const response = await prompts({
                type: 'select',
                name: 'product',
                message: 'Selecione um produto para adicionar ao pedido:',
                choices: [...choices, { title: 'Finalizar Pedido', value: 'finish' }],
            });

            if (response.product === 'finish') {
                addingProducts = false;
            } else {
                const selectedProduct = products.find(p => p.name === response.product);
                if (selectedProduct) {
                    productsInOrder.push(selectedProduct);
                    console.log(`\n"${selectedProduct.name}" adicionado ao pedido.`);
                }
            }
        }

        // Passo 3: Finalizar o pedido
        if (productsInOrder.length > 0) {
            this.mainController.db.placeOrder();
            console.log('\n✅ Pedido realizado com sucesso!');
        } else {
            console.log('\n❌ Nenhum produto adicionado. Pedido cancelado.');
        }
    }
}