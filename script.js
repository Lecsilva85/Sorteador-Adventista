function generateNumber() {
    const minInput = document.querySelector('.input-min');
    const maxInput = document.querySelector('.input-max');
    const resultadoElement = document.querySelector('.resultado');
    const mensagemErroElement = document.querySelector('.return .mensagem-erro');
    const premioDiv = document.querySelector('.premio');
    const returnDiv = document.querySelector('.return');
    const mascaraDiv = document.querySelector('.mascara');

    premioDiv.classList.remove('show');
    returnDiv.classList.remove('show');
    mascaraDiv.classList.remove('show');

    const min = Math.ceil(minInput.value);
    const max = Math.floor(maxInput.value);

    if (minInput.value === '' || maxInput.value === '') {
        mensagemErroElement.textContent = "Por favor, preencha ambos os campos: 'Número inicial' e 'Número final'.";
        returnDiv.classList.add('show');
        mascaraDiv.classList.add('show');
        return;
    }

    if (min > max) {
        mensagemErroElement.textContent = "O número inicial não pode ser maior que o número final. Por favor, ajuste seus valores.";
        returnDiv.classList.add('show');
        mascaraDiv.classList.add('show');
        return;
    } else if (min === max) {
        mensagemErroElement.textContent = "O número inicial e o número final não podem ser iguais. Por favor, insira um intervalo maior.";
        returnDiv.classList.add('show');
        mascaraDiv.classList.add('show');
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    resultadoElement.textContent = result;
    premioDiv.classList.add('show');
    mascaraDiv.classList.add('show');
}

function closePrize() {
    const premioDiv = document.querySelector('.premio');
    const mascaraDiv = document.querySelector('.mascara');

    premioDiv.classList.remove('show');
    mascaraDiv.classList.remove('show');
}

function closeReturn() {
    const returnDiv = document.querySelector('.return');
    const mascaraDiv = document.querySelector('.mascara');

    returnDiv.classList.remove('show');
    mascaraDiv.classList.remove('show');
}

document.querySelector('.premio button').onclick = closePrize;
document.querySelector('.return button').onclick = closeReturn;