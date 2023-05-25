
// PAGINA 1
var dado = localStorage.getItem("array");
dado = JSON.parse(dado);

const titulo = dado[0].titulo;
const url = dado[0].src;
const preco = dado[0].preco;

var quantidade = localStorage.getItem("quantidade");
quantidade = "Quantidade: " + JSON.parse(quantidade);

var total = localStorage.getItem("total");
total = "Total: " + JSON.parse(total);

const imgElemento = document.getElementById("img1");
imgElemento.src = url;
document.getElementById('total').textContent = total;
document.getElementById('quant').textContent = quantidade;
document.getElementById('titulo').textContent = titulo;


// PAGINA 2
var dado2 = localStorage.getItem("array2");
dado2 = JSON.parse(dado2);

const titulo2 = dado2[0].titulo;
const url2 = dado2[0].src;



const preco2 = dado2[0].preco;


var total2 = localStorage.getItem("total2");
total2 = "Total: " + JSON.parse(total2);

var quantidade2 = localStorage.getItem("quantidade2");
quantidade2 = "Quantidade: " + JSON.parse(quantidade2);

const imgElemento2 = document.getElementById("img2");
imgElemento2.src = url2;
document.getElementById('total2').textContent = total2;
document.getElementById('quant2').textContent = quantidade2;
document.getElementById('titulo2').textContent = titulo2;


// PAGINA 3
var dado3 = localStorage.getItem("array3");
dado3 = JSON.parse(dado3);


const titulo3 = dado3[0].titulo;
const url3 = dado3[0].src;


const preco3 = dado3[0].preco;

var total3 = localStorage.getItem("total3");
total3 = "Total: " + JSON.parse(total3);

var quantidade3 = localStorage.getItem("quantidade3");
quantidade3 = "Quantidade: " + JSON.parse(quantidade3);

const imgElemento3 = document.getElementById("img3");
imgElemento3.src = url3;
document.getElementById('total3').textContent = total3;
document.getElementById('quant3').textContent = quantidade3;
document.getElementById('titulo3').textContent = titulo3;








