console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
conosole.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Comprador maior de idade");
} else {
    console.log("Não é maior de idade e não posso vender");
}
console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else{
    console.log("Você não pode embarcar");
} 

//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // removendo item


console.log(listaDeDestinos[1], listaDeDestinos[0]);