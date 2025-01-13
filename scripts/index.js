document.addEventListener('DOMContentLoaded', () => {
    const calcButton = document.getElementById('calc-button');

    calcButton.addEventListener('click', () => {
        calcularServico();
    });

    // Função para calcular o serviço
    function calcularServico() {
        let valorPeca = 0;
        let maoDeObra;
        let tipoReparo = null;

        // Verificando o tipo de reparo
        if (document.getElementById('repair-check-1').checked) {
            tipoReparo = "1"; // Reparo sem peça
            maoDeObra = 70;
            valorPeca = 0; // Não há valor de peça para este tipo de reparo
        } else if (document.getElementById('repair-check-2').checked) {
            tipoReparo = "2"; // Reparo com peça fácil/médio
            maoDeObra = 100;
            valorPeca = parseFloat(document.getElementById('currency-input').value.replace(',', '.'));
        } else if (document.getElementById('repair-check-3').checked) {
            tipoReparo = "3"; // Reparo com peça difícil/iPhone
            maoDeObra = 120;
            valorPeca = parseFloat(document.getElementById('currency-input').value.replace(',', '.'));
        } else {
            alert("Escolha um tipo de reparo.");
            return;
        }

        // Verificando se o valor da peça é válido
        if (valorPeca < 0 || isNaN(valorPeca)) {
            alert("Por favor, insira um valor válido para a peça.");
            return;
        }

        // Determinando o percentual de lucro
        let percentualLucro = 0;
        if (valorPeca <= 99) {
            percentualLucro = 0.60;
        } else if (valorPeca <= 199) {
            percentualLucro = 0.50;
        } else if (valorPeca <= 259) {
            percentualLucro = 0.40;
        } else {
            percentualLucro = 0.30;
        }

        const valorPecaComLucro = valorPeca * (1 + percentualLucro);
        const valorServico = valorPecaComLucro + maoDeObra;

        // Verificando a forma de pagamento (radio buttons)
        let valorFinal;
        if (document.getElementById('payment-check-1').checked || document.getElementById('payment-check-2').checked) {
            valorFinal = valorServico * 0.92; // Desconto de 8% para Pix ou Dinheiro
        } else if (document.getElementById('payment-check-3').checked) {
            valorFinal = valorServico * 0.8911; // Desconto de -10.89% para Crédito (2x)
        } else if (document.getElementById('payment-check-4').checked) {
            valorFinal = valorServico * 0.9771; // Desconto de 2.29% para Débito
        } else {
            alert("Escolha uma forma de pagamento.");
            return;
        }

        // Atualizando o valor na página
        const resultPrice = document.querySelector('.result-price');
        resultPrice.textContent = `R$${valorFinal.toFixed(2)}`;
    }
});
