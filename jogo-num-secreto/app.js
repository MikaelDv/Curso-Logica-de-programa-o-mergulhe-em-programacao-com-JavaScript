alert('Boas vindas ao jogo do número secreto!');
let dificuldade = parseInt(prompt('Digite, em números, o nível de dificuldade.'));
let numeroSecreto = parseInt(Math.random() * dificuldade + 1);
console.log('O número secreto é: ', numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${dificuldade}`);
    // se chute = número secreto
    if (numeroSecreto == chute) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1; funciona como:
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);