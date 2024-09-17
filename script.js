document.getElementById("calculate").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultsDiv = document.getElementById("results");
    
    if (isNaN(num1) || isNaN(num2)) {
        resultsDiv.innerHTML = '<p class="result-item">Por favor, ingresa dos números válidos.</p>';
        return;
    }

    const operations = [
        {name: 'Suma', result: num1 + num2},
        {name: 'Resta', result: num1 - num2},
        {name: 'Multiplicación', result: num1 * num2},
        {name: 'División', result: num2 !== 0 ? (num1 / num2).toFixed(2) : 'Infinito (división por cero)'},
        {name: 'Módulo', result: num2 !== 0 ? num1 % num2 : 'Indefinido (división por cero)'}
    ];

    resultsDiv.innerHTML = '';

    operations.forEach((op, index) => {
        resultsDiv.innerHTML += `<div class="result-item"><strong>Iteración ${index + 1} (${op.name}):</strong> ${op.result}</div>`;
    });
});
    