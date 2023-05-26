
// verifica se o status da pagina é 'loading', se for espera carregar toda pag
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}

function ready() {
  // pega os elementos que possuem a classe quantidade e adiciona uma função pra quando der um click -- addProduto
  const addCarrinhoBTN = document.getElementsByClassName("quantidade");
  for (var i = 0; i < addCarrinhoBTN.length; i++) {
    addCarrinhoBTN[i].addEventListener("click", addProduto);
  }

  // função que adiciona um produto
  function addProduto(event) {
    // obtem a referencia pro botao clicado
    const button = event.target;
    // pega as informações sobre o produto
    const infoProduto = button.parentElement.parentElement.parentElement;
    const tituloProduto = infoProduto.getElementsByClassName("descricaoTitulo1")[0].innerText;
    const itemProduto = infoProduto.getElementsByClassName("ingresso0")[0].innerText;
    const precoProduto = infoProduto.getElementsByClassName("preco")[0].innerText;
    const imagem = "./images/interXimply.jpg";

    // cria uma nova div e adiciona a classe itemCarrinho
    let novoCarrinho = document.createElement("div");
    novoCarrinho.classList.add("itemCarrinho");

    // preenche essa div com o produto
    novoCarrinho.innerHTML =
      `
      <img class="imgCarrinho" src=${imagem} alt="Product 1">
      <h2 class="prodCarrinhoItem">${itemProduto}</h2>
      <h2 class="prodCarrinhoPreco">${precoProduto}</h2>
      <div>
        <input type="number" value="1" min="0" class="carrinho-qtd-input">
        <button type="button" class="removeBTN">Remover</button>
      </div>
      `;

    // cria uma div com a classe carrinhoPAG1 e adiciona o produto nessa div
    const div = document.getElementsByClassName("carrinhoPAG1")[0];
    div.append(novoCarrinho);

    // chama a função para atualizar os valores
    atualizarTotal();

    // pega o elemento da div com a classe removeBTN e adiciona o remover ao clicar
    novoCarrinho.getElementsByClassName("removeBTN")[0].addEventListener("click", removerProduto);

    const arrayDados = [];
    // pega a quantidade de produtos
    const quantidadeDivs = document.getElementsByClassName("removeBTN");
    for (var i = 0; i < quantidadeDivs.length; i++) {
      arrayDados[i] = {
        titulo: tituloProduto,
        item: itemProduto,
        preco: precoProduto,
        src: imagem
      };

      // array convertido em uma string
      localStorage.setItem("array", JSON.stringify(arrayDados));

      // pega a quantidade de produtos e adiciona um evento change, pra atualizar em tempo real os valores
      const quantidadeInputs = document.getElementsByClassName("carrinho-qtd-input");
      for (var i = 0; i < quantidadeInputs.length; i++) {
        quantidadeInputs[i].addEventListener("change", atualizarTotal);
      }
    }
  }

  // funcao que remove o todos os elementos da div, ou seja produto todo
  function removerProduto(event) {
    event.target.parentElement.parentElement.remove();
    atualizarTotal();
  }

  // funcao que atualiza os valores
  function atualizarTotal() {
    let totalPreco = 0;
    let produtoQuantidade = 0;
    const produtosCarrinho = document.getElementsByClassName("itemCarrinho");
    for (var i = 0; i < produtosCarrinho.length; i++) {
      const produtoPreco = produtosCarrinho[i].getElementsByClassName("prodCarrinhoPreco")[0].innerText.replace("R$", "").replace(",", ".");
      produtoQuantidade += parseInt(produtosCarrinho[i].getElementsByClassName("carrinho-qtd-input")[0].value);
      totalPreco = (produtoPreco * produtoQuantidade);
    }
    totalPreco = totalPreco.toFixed(2);
    totalPreco = totalPreco.replace(".", ",");

    //  retorna o primeiro elemento que corresponde ao seletor especificado.
    document.querySelector(".total span").innerText = "R$" + totalPreco;
    localStorage.setItem("quantidade", JSON.stringify(produtoQuantidade));
    localStorage.setItem("total", JSON.stringify("R$"+totalPreco));
  }
}


