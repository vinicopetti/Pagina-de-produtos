if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }
  
  
  function ready() {
  
    // const removeProduto = document.getElementsByClassName("removeBTN");
    // console.log(removeProduto)
    // for (var i = 0; i < removeProduto.length; i++) {
    //   removeProduto[i].addEventListener("click", removerProduto)
    // }
    
  
    // o erro é nessa parte
    
  
    const addCarrinhoBTN = document.getElementsByClassName("quantidade")
    for (var i = 0; i < addCarrinhoBTN.length; i++) {
      addCarrinhoBTN[i].addEventListener("click", addProduto)
    }

    document.getElementById("botao1").addEventListener("click", addProduto);
    document.getElementById("botao2").addEventListener("click", addProduto);

  
    function addProduto(event){  
      const button = event.target;
      const infoProduto = button.parentElement.parentElement.parentElement;
      const produto = button.getAttribute("data-produto");
      const tituloProduto = infoProduto.getElementsByClassName("descricaoTitulo2")[0].innerText;
      const precoTotal = infoProduto.getElementsByClassName("precoTotal")[0].innerText;
      let itemProduto;
      let precoProduto1;
      let imagem;
  
      //const itemProduto = infoProduto.getElementsByClassName("ingresso5")[0].innerText;
      //const precoProduto = infoProduto.getElementsByClassName("preco5")[0].innerText;
      //const imagem = "./images/intexpalmeiras.jpg"
      
      if (produto === "produto1") {
        itemProduto = document.getElementById("ingresso4").innerText;
        precoProduto1 = document.getElementById("preco4").innerText;
        imagem = "./images/intexpalmeiras.jpg";
      } else if (produto === "produto2") {
        itemProduto = document.getElementById("ingresso5").innerText;
        precoProduto1 = document.getElementById("preco5").innerText;
        imagem = "./images/intexpalmeiras.jpg";
      }
    
      let newNovoCarrinho = document.createElement("div");
      newNovoCarrinho.classList.add("itemCarrinho"); 
  
      newNovoCarrinho.innerHTML = 
      `
      <img class="imgCarrinho" src=${imagem} alt="Product 1">
                  <h2 class="prodCarrinhoItem">${itemProduto}</h2>
                  <h2 class="prodCarrinhoPreco">${precoProduto1}</h2>
                  <div>
                    <input type="number" value="1" min="0" class="carrinho-qtd-input">
                    <button type="button" class="removeBTN">Remover</button>
                  </div>
      
      `
      const div = document.getElementsByClassName("carrinhoPAG1")[0]; //mudei
      div.append(newNovoCarrinho);
      atualizarTotal()
  
      newNovoCarrinho.getElementsByClassName("removeBTN")[0].addEventListener("click", removerProduto)
      // newNovoCarrinho.getElementsByClassName("produto-qtd-input")[0].addEventListener("change", atualizarTotal)
  


    const quantidadeDivs = document.getElementsByClassName("removeBTN")
    const arrayDados2 = []
   
    for (var i = 0; i < quantidadeDivs.length; i++) {
      arrayDados2[i] = {
        titulo: tituloProduto,
        item: itemProduto,
        preco: precoProduto1, 
        src: imagem 
      }
      
      
      localStorage.setItem("array2", JSON.stringify(arrayDados2))

      const quantidadeInputs = document.getElementsByClassName("carrinho-qtd-input")
    for (var i = 0; i < quantidadeInputs.length; i++) {
      quantidadeInputs[i].addEventListener("change", atualizarTotal)
    }
  }
}
  
   
    
  function removerProduto(event) {
    event.target.parentElement.parentElement.remove()
    atualizarTotal()
  }
  
  
  // window.addEventListener("load", atualizarTotal);
  
  function atualizarTotal(){ 
  let totalPreco = 0;
  var produtoQuantidade = 0
  const produtosCarrinho = document.getElementsByClassName("itemCarrinho");
  for (var i = 0; i < produtosCarrinho.length; i++) {
    const produtoPreco = produtosCarrinho[i].getElementsByClassName("prodCarrinhoPreco")[0].innerText.replace("R$", "").replace(",", ".");
    produtoQuantidade += parseInt(produtosCarrinho[i].getElementsByClassName("carrinho-qtd-input")[0].value)
    totalPreco = produtoPreco * produtoQuantidade;
  }
  
  totalPreco = totalPreco.toFixed(2);
  totalPreco = totalPreco.replace(".", ",");
  document.querySelector(".total span").innerText = "R$" + totalPreco;
  localStorage.setItem("total2", JSON.stringify("R$"+totalPreco));
  localStorage.setItem("quantidade2", JSON.stringify(produtoQuantidade));
  
  }
  }