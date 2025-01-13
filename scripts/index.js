document.addEventListener('DOMContentLoaded', () => {
    const calcButton = document.getElementById('calc-button');

    calcButton.addEventListener('click', () => {
        calcularServico();
    });

    function calcularServico() {
        let valorPeca = 0;
        let maoDeObra;
        let tipoReparo = null;

        // Verificando o tipo de reparo
        if (document.getElementById('repair-check-1').checked) {
            tipoReparo = "1"; // Reparo sem peça
            maoDeObra = 70;
            valorPeca = 0;
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

        // Calculando valores para diferentes formas de pagamento
        const valorPixDinheiro = valorServico * 0.92;
        const valorCartao1x = valorServico * 0.9551; // Desconto de 4.49% para crédito 1x
        const valorCartao2x = valorServico * 1.10;   // 10% a mais para crédito 2x
        const valorDebito = valorServico * 0.9771;   // 2.29% de desconto para débito

        // Atualizando os valores na página
        document.querySelector('.result-price').textContent = `R$${valorPixDinheiro.toFixed(2)}`;
        document.querySelector('.result-price-credit').textContent = `R$${valorCartao1x.toFixed(2)}`;
        document.querySelector('.result-price-credit-2x').textContent = `R$${valorCartao2x.toFixed(2)}`;
        document.querySelector('.result-price-debit').textContent = `R$${valorDebito.toFixed(2)}`;
    }
});
