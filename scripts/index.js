document.addEventListener('DOMContentLoaded', () => {
    const calcButton = document.getElementById('calc-button');
    const resultDisplay = document.getElementById('final-price');
    const toggleOptionsButton = document.getElementById("toggle-options");
    const extraOptions = document.getElementById("extra-options");

    // Seleciona os inputs
    const valorPecaInput = document.getElementById('valor-peca');
    const valorServicoInput = document.getElementById('valor-servico');
    const precoEnvioInput = document.getElementById('preco-envio');
    const percentualInput = document.getElementById('percentual');

    // Função para salvar os valores no localStorage
    function salvarDados() {
        localStorage.setItem('valorPeca', valorPecaInput.value);
        localStorage.setItem('valorServico', valorServicoInput.value);
        localStorage.setItem('precoEnvio', precoEnvioInput.value);
        localStorage.setItem('percentual', percentualInput.value);
    }

    // Função para carregar os valores salvos
    function carregarDados() {
        valorPecaInput.value = localStorage.getItem('valorPeca') || '';
        valorServicoInput.value = localStorage.getItem('valorServico') || '';
        precoEnvioInput.value = localStorage.getItem('precoEnvio') || '';
        percentualInput.value = localStorage.getItem('percentual') || '';
    }

    // Função para calcular o preço final
    function calcularServico() {
        let valorPeca = parseFloat(valorPecaInput.value.replace(',', '.')) || 0;
        let valorServico = parseFloat(valorServicoInput.value.replace(',', '.')) || 0;
        let precoEnvio = parseFloat(precoEnvioInput.value.replace(',', '.')) || 0;
        let percentual = parseFloat(percentualInput.value) || 0;

        let adicional = (valorPeca * percentual) / 100;
        const valorFinal = valorPeca + adicional + valorServico + precoEnvio;

        resultDisplay.textContent = valorFinal.toFixed(2).replace('.', ',');
    }

    // Evento para alternar a exibição das opções extras
    toggleOptionsButton.addEventListener("click", () => {
        extraOptions.classList.toggle("hidden");
    });

    // Adiciona eventos para salvar os valores sempre que um input for modificado
    [valorPecaInput, valorServicoInput, precoEnvioInput, percentualInput].forEach(input => {
        input.addEventListener('input', salvarDados);
    });

    // Evento de clique no botão para calcular
    calcButton.addEventListener('click', () => {
        setTimeout(calcularServico, 100);
    });

    // Carrega os valores salvos ao iniciar a página
    carregarDados();
});
