let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'));
let soma = 0;
let contador = 0;

while(contador < qtdNumeros){
    let numero = parseInt(prompt('Digite o numero:'));
    contador++;
    soma += numero;
}

let media = soma / qtdNumeros;

console.log('A média é:', media);