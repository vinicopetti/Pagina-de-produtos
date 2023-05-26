if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  const addCarrinhoBTN = document.getElementsByClassName("quantidade");
  for (var i = 0; i < addCarrinhoBTN.length; i++) {
      addCarrinhoBTN[i].addEventListener("click", addProduto);
  }

  const attButtons = document.getElementsByClassName("att");
  for (var i = 0; i < attButtons.length; i++) {
      attButtons[i].addEventListener("click", atualizarTotal);
  }

  document.getElementById("botao3").addEventListener("click", addProduto);
  document.getElementById("botao4").addEventListener("click", addProduto);

  function addProduto(event) {
      const button = event.target;
      const infoProduto = button.parentElement.parentElement.parentElement;
      const produto = button.getAttribute("data-produto");
      const tituloProduto = infoProduto.getElementsByClassName("descricaoTitulo3")[0].innerText;
      let itemProduto;
      let precoProduto;
      let imagem;

      if (produto === "produto3") {
          itemProduto = document.getElementById("ingresso6").innerText;
          precoProduto = document.getElementById("preco6").innerText;
          imagem = "./images/brunoEmarrone.jpg";
      } else if (produto === "produto4") {
          itemProduto = document.getElementById("ingresso7").innerText;
          precoProduto = document.getElementById("preco7").innerText;
          imagem = "./images/brunoEmarrone.jpg";
      }

      let newNovoCarrinho = document.createElement("div");
      newNovoCarrinho.classList.add("itemCarrinho");

      newNovoCarrinho.innerHTML =
          `
    <img class="imgCarrinho" src=${imagem} alt="Product 1">
                <h2 class="prodCarrinhoItem">${itemProduto}</h2>
                <h2 class="prodCarrinhoPreco">${precoProduto}</h2>
                <div>
                  <input type="number" value="1" min="0" class="carrinho-qtd-input">
                  <button type="button" class="removeBTN">Remover</button>
                </div>
    
    `;

      const div = document.getElementsByClassName("carrinhoPAG1")[0];
      div.append(newNovoCarrinho);
      atualizarTotal();

      newNovoCarrinho.getElementsByClassName("removeBTN")[0].addEventListener("click", removerProduto);
      const quantidadeDivs = document.getElementsByClassName("removeBTN");
      const arrayDados3 = [];

      for (var i = 0; i < quantidadeDivs.length; i++) {
          arrayDados3[i] = {
              titulo: tituloProduto,
              item: itemProduto,
              preco: precoProduto,
              src: imagem
          };

          localStorage.setItem("array3", JSON.stringify(arrayDados3));
          const quantidadeInputs = document.getElementsByClassName("carrinho-qtd-input");

          for (var i = 0; i < quantidadeInputs.length; i++) {
              quantidadeInputs[i].addEventListener("change", atualizarTotal);
          }
      }
  }

  function removerProduto(event) {
      event.target.parentElement.parentElement.remove();
      atualizarTotal();
  }

  function atualizarTotal() {
      let totalPreco = 0;
      var produtoQuantidade = 0;
      const produtosCarrinho = document.getElementsByClassName("itemCarrinho");
      for (var i = 0; i < produtosCarrinho.length; i++) {
        const produtoPreco = produtosCarrinho[i].getElementsByClassName("prodCarrinhoPreco")[0].innerText.replace("R$", "").replace(",", ".");
        produtoQuantidade += parseInt(produtosCarrinho[i].getElementsByClassName("carrinho-qtd-input")[0].value);
        totalPreco = produtoPreco * produtoQuantidade;
    }

    totalPreco = totalPreco.toFixed(2);
    totalPreco = totalPreco.replace(".", ",");
    document.querySelector(".total span").innerText = "R$" + totalPreco;
    localStorage.setItem("total3", JSON.stringify("R$" + totalPreco));
    localStorage.setItem("quantidade3", JSON.stringify(produtoQuantidade));
  }
}