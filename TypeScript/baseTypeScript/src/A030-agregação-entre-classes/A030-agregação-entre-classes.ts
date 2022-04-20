// agregação é uma relação onde uma classe precisa de outra para funcionar corretamente
// é uma relação mais forte
// mas ambas podem viver separadamente e terem outros usos
// podem existir mais de um

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }
  quantidadeDeProdutos(): number {
    return this.produtos.length;
  }
  ValorDoCarrinho(): number {
    return this.produtos.reduce((acc, produto) => {
      return acc + produto.preço;
    }, 0);
  }
}
class Produto {
  constructor(public nome: string, public preço: number) {}
}

const carrinho = new CarrinhoDeCompras();
const produto1 = new Produto('Cadeira', 700);
const produto2 = new Produto('processador', 1700);
const produto3 = new Produto('rtx3090', 10700);

carrinho.inserirProduto(produto1, produto2, produto3);

console.log(carrinho);
