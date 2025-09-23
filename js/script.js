// Esta é a função que será chamada quando o botão for clicado.
function converter() {
// 1. OBTER O VALOR DO CAMPO DE ENTRADA


// Obtém o valor do campo com o ID 'celsius'.
let celsiusString = document.getElementById('celsius').value;


// 2. CONVERTER O VALOR DE TEXTO PARA NÚMERO


// Converte a string obtida para um número com casas decimais.
let celsius = parseFloat(celsiusString);


// 3. VERIFICAR SE O VALOR É UM NÚMERO VÁLIDO


// Verifica se o valor não é um número.
if (isNaN(celsius)) {

    // Se o valor não for um número válido, exibe um alerta.
    alert("Por favor, digite uma temperatura numérica válida.");

    return; // Para a execução da função.

}


// 4. REALIZAR O CÁLCULO DE CONVERSÃO


// A fórmula para converter Celsius para Fahrenheit é: (C × 9/5) + 32.
let fahrenheit = (celsius * 9/5) + 32;


// 5. EXIBIR O RESULTADO NA PÁGINA


// Seleciona o elemento <h2> com o ID 'resultado'.
// Exibe o resultado da conversão de forma clara e amigável.
document.getElementById('resultado').innerHTML = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;

}
