let respostaUsuário = prompt('Qual é o dia da semana?')
respostaUsuário = respostaUsuário.toLowerCase();

if(respostaUsuário == 'sábado' || respostaUsuário == 'domingo'){
        alert('Bom fim de semana!')
    } else {
        alert('Boa semana!')
    }