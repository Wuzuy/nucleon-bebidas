const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const cafeinaInput = document.getElementById('cafeina');
const btnCalculate = document.querySelector('.btn-calculate');
const resultsContainer = document.getElementById('results');
const imcValue = document.getElementById('imc-value');
const limiteCafeina = document.getElementById('limite-cafeina');
const consumoRestante = document.getElementById('consumo-restante');

btnCalculate.addEventListener('click', calcular);

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calcular();
});

// Calcula os limites diários com base no peso
function calcular() {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);
    const cafeina = parseFloat(cafeinaInput.value) || 0;

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura!');
        return;
    }

    const alturaEmMetros = altura / 100;
    const imc = peso / (alturaEmMetros * alturaEmMetros);
    const limiteDiarioCafeina = peso * 4;
    const restante = limiteDiarioCafeina - cafeina;

    imcValue.textContent = imc.toFixed(2);
    limiteCafeina.textContent = `${limiteDiarioCafeina.toFixed(0)} mg`;

    if (restante < 0) {
        consumoRestante.textContent = '0 mg (limite excedido!)';
        consumoRestante.style.color = '#e74c3c';
    } else {
        consumoRestante.textContent = `${restante.toFixed(0)} mg`;
        consumoRestante.style.color = '#27ae60';
    }

    resultsContainer.style.display = 'grid';
}

// Limpa os dados na inicialização
window.addEventListener('load', () => {
    pesoInput.value = '';
    alturaInput.value = '';
    cafeinaInput.value = '';
});